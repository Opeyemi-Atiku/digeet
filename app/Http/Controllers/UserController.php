<?php

namespace App\Http\Controllers;

use App\Identity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\Users\EmailVerification;
use Illuminate\Support\Facades\Hash;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App\User;
use App\UserMeta;
use Carbon\Carbon;

class UserController extends Controller
{

	/**
	* User credential
	*/
	public function userCredential(){

		$auth_user = auth('api')->user();
		$auth_user_ = auth('api')->user()->userMeta;

		foreach($auth_user as $key => $value){
			$auth_user_->$key = $value;
		}

		return response()->json(['auth_user' => $auth_user ], 200);

	}

	/**
    * Send verification email
    *
    */
	public function sendVerificationMail(Request $request){

		$email = ($request->get('email') != null) ? $request->get('email') : Auth::user()->email;

		$currentTime = Carbon::now();

        // Generate unique code for the user and store the hash
        $passcode = mt_rand(10000, 99999);
        $hashString = Hash::make($passcode);
        // $authString = $passcode.$request->get('email');

        $updateAuth = User::where('id', Auth::user()->id)->update([
            'auth_token' => $hashString,
            'auth_token_at' => $currentTime,
        ]);

        if($updateAuth){
        	$mailData = [
                    'email' => $email,
                    'subject' => "Digeets Email Verification",
                    'magicLink' => getenv('APP_URL').'/magicLink?token='.encrypt($hashString),
                    'name' => Auth::user()->name
            ];

	        // Send mail
	        Mail::to($mailData['email'])
	             ->queue(new EmailVerification($mailData));

	        return response()->json(['status' => 'success', 'message' => 'Verification email sent successfully'], 200);

        }

        return response()->json(['status' => 'error', 'message' => 'Unable to send verification email'], 200);

	}


	/**
    * Verify email using the token from email magic link
    *
    */
    public function verifyEmail(Request $request){
        $user = User::where('auth_token', decrypt($request->get('token')))->first();

        // Check if the user exists and if the token is yet to expire; one hour
        if ($user && Carbon::parse($user->auth_token_at)->diffInHours() <= 1 ) {

            $user->update([
                'auth_token' => NULL,
                'auth_token_at' => NULL,
                'verified' => true,
            ]);

            return response()->json(['status' => 'success', 'message' => 'Email verified successfully'], 200);
        }

        return response()->json([
            'status' => 'error',
            'message' => "AUthentication failed or link expired.",
        ]);
    }



    /**
    * Upgrade user plan
    *
    */
    public function upgradePlan(Request $request){

    	if(Auth::user()->referred_by == null){
    		$upgradePlan = User::where('id', Auth::user()->id)->update([
	    		'plan' => $request->get('plan'),
    		]);
    	}
    	else{
    		$upgradePlan = User::where('id', Auth::user()->id)->update([
	    		'plan' => $request->get('plan'),
	    		'referral_status' => 'successful'
    		]);
    	}


    	if($upgradePlan){
    		return response()->json(['status' => 'success', 'message' => 'Plan upgraded successfully'], 200);
    	}

    	return response()->json(['status' => 'error', 'message' => 'Unable to update plan'], 200);
    }


    public function getBvnInfo(Request $request){
    	$bvn = $request->get('bvn');

    	$client = new Client;

    	try{

    		$result = $client->get('https://api.paystack.co/bank/resolve_bvn/'.$bvn, [
    			'headers' => [
    				'Authorization' => 'Bearer '.getenv('PAYSTACK_SK_KEY')
    			]

    		]);

    	}catch(GuzzleException $exception){
    		return response()->json(['status' => 'error', 'message' => $exception->getMessage()], 200);
    	}

    	if($result->getStatusCode() == '200'){

    		$body = (string) $result->getBody();
    		$response = json_decode($body);
    		$updateBvn = UserMeta::where('user_id', Auth::user()->id)->update(['bvn' => Hash::make($response->data->bvn)]);
    		if($updateBvn){
    			return response()->json(['status' => 'success', 'data' => ['bvn' => $response->data->bvn, 'phone_number' => $response->data->mobile]], 200);
    		}

    		return response()->json(['status' => 'error', 'message' => 'Unable to update bvn'], 200);

    	}

    	return response()->json(['status' => 'error', 'message' => 'Unable get bvn information'], 200);

    }

    public function updateBvnStatus(Request $request){
    	$Info = UserMeta::where('user_id', Auth::user()->id)->first();

    	if($Info){
    		$bvnCheck = Hash::check($request->get('bvn'), $Info->bvn);

    		if($bvnCheck){
    			$Info->update(['bvn_verified' => $request->get('verified')]);

    			return response()->json(['status' => 'success', 'message'=>'BVN verification status updated successfully'], 200);
    		}

    		return response()->json(['status' => 'error', 'message'=>'Unable to update BVN verification status'], 200);
    	}

    }

    public function uploadIdentity(Request $request) {

        $email = User::where('id', $request->user_id)->first()['name'];


        $file = $request->front->getClientOriginalName();

        $filename_without_extension = pathinfo($file, PATHINFO_FILENAME);

        $extension = $request->front->getClientOriginalExtension();

        $front = $filename_without_extension.'_'.time().'.'.$extension;

        $request->front->move('identities/'.$email.'/', $front);


        $file = $request->back->getClientOriginalName();

        $filename_without_extension = pathinfo($file, PATHINFO_FILENAME);

        $extension = $request->back->getClientOriginalExtension();

        $back = $filename_without_extension.'_'.time().'.'.$extension;

        $request->back->move('identities/'.$email.'/', $back);


        $file = $request->full->getClientOriginalName();

        $filename_without_extension = pathinfo($file, PATHINFO_FILENAME);

        $extension = $request->full->getClientOriginalExtension();

        $full = $filename_without_extension.'_'.time().'.'.$extension;

        $request->full->move('identities/'.$email.'/', $full);



        $identity = Identity::create([
            'user_id' => $request->user_id,
            'front' => 'identities/'.$email.'/'.$front,
            'back' => 'identities/'.$email.'/'.$back,
            'with_user' => 'identities/'.$email.'/'.$full,
            'verified' => false
        ]);

        if($identity) {
            return response("Identity successfully uploaded", 200);
        }


    }


}
