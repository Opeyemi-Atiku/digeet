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
        $credentials = ['email' => $request->get('email'), 'password' => $request->get('password')];
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json(['status' => 'error', 'message' => 'Invalid email or password'], 200);
        }

        auth()->setTTL(52560000);

        return $this->respondWithToken($token);
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
