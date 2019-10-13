<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\UserMeta;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuthExceptions\JWTException;
use App\Mail\Users\EmailVerification;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RegisterController extends Controller
{
   
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
            return Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:6'],
                'gender' => ['required', 'string', 'max:1'],
                'state' => ['string'],
                'whatsapp_contact' => ['string'],
                'age_range' => ['string'],
                'country' => ['string'],
                'bank_name' => ['string'],
                'account_name' => ['string'],
                'account_number' => ['string'],
            ]);
    }

    
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    public function create(Request $request)
    {   
        $validator = $this->validator($request->all());

        if($validator->fails()){
            return response()->json(['status' => 'error', 'message' => 'Validation failed', 'validation_error' => $validator->errors()], 200);
        }

        $currentTime = Carbon::now();

        // Generate unique code for the user and store the hash
        $passcode = mt_rand(10000, 99999);
        $hashString = Hash::make($passcode);

        $createUser = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'gender' => $request->get('gender'),
            'password' => bcrypt($request->get('password')),
            'auth_token' => $hashString,
            'auth_token_at' => $currentTime,
        ]);

        if($createUser){

            $mailData = [
                    'email' => $request->get('email'),
                    'subject' => "Digeets Email Verification",
                    'magicLink' => getenv('APP_URL').'/magicLink?token='.encrypt($hashString),
                    'name' => $request->get('name')
            ];

            UserMeta::create([
                'user_id' => $createUser->id,
                'state' => $request->get('state'),
                'whatsapp_contact' => $request->get('whatsapp_contact'),
                'age_range' => $request->get('age_range'),
                'country' => ($request->get('country') != null) ? $request->get('country') : 'Nigeria',
                'bank_name' => $request->get('bank_name'),
                'account_name' => $request->get('account_name'),
                'account_number' => $request->get('account_number')

            ]);

            // Send mail
            Mail::to($mailData['email'])
                ->queue(new EmailVerification($mailData));

            return response()->json(['status' => 'success', 'message' => 'Verification email sent successfully'], 200);
        }

        return response()->json(['status' => 'error', 'message' => 'Unable to create user'], 200);
    }



    /**
     * update user info 
     * 
     */
    public function updateInfo(Request $request){
        
        $updateInfo = UserMeta::where('user_id', Auth::user()->id)->update($request->all());

        if($updateInfo){
            return response()->json(['status' => 'success', 'message' => 'Profile updated successfully'], 200);
        }

        return response()->json(['status' => 'error', 'message' => 'Unable to update profile'], 200);

    }



    /**
    * Verify email using the token from email magic link
    *
    */
    public function verifyEmail(Request $request){
        $user = User::where('auth_token', decrypt($request->get('token')))->first();

        // Check if the user exists and if the token is yet to expire; one hour
        if ($user && Carbon::parse($user->auth_token_at)->diffInHours() <= 1 ) {
            $token = auth()->login($user);
            if (!$token) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }

            auth()->setTTL(52560000);

            $user->update([
                'auth_token' => NULL,
                'auth_token_at' => NULL,
                'verified' => true,
            ]);

            return $this->respondWithToken($token);
        }

        return response()->json([
            'status' => 'failed',
            'message' => "AUthentication failed or link expired.",
        ]);
    }





     /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ]);
    }

}
