<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Mail\Users\EmailVerification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;

class LoginController extends Controller
{

    public function login(Request $request){
        $user = User::where('email', $request->get('email'))->first();
        if($user->verified){
            $credentials = ['email' => $request->get('email'), 'password' => $request->get('password')];
            $token = Auth::attempt($credentials);
            if (!$token) {
                return response()->json(['status' => 'error', 'message' => 'Invalid email or password'], 200);
            }

            auth()->setTTL(52560000);

            return $this->respondWithToken($token);
        }

        $currentTime = Carbon::now();

        // Generate unique code for the user and store the hash
        $passcode = mt_rand(10000, 99999);
        $hashString = Hash::make($passcode);

        $user->update([
            'auth_token' => $hashString,
            'auth_token_at' => $currentTime,
        ]);

        $mailData = [
                    'email' => $request->get('email'),
                    'subject' => "Digeets Email Verification",
                    'magicLink' => getenv('APP_URL').'/magicLink?token='.encrypt($hashString),
                    'name' => $user->name
        ];

        // Send mail
        Mail::to($mailData['email'])
                ->queue(new EmailVerification($mailData));

        return response()->json(['status' => 'success', 'message' => 'User unverified - Verification email sent successfully'], 200);
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
