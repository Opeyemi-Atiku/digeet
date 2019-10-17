<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Investment;

class InvestmentController extends Controller
{
    //

	public function validator(array $data ){
		return Validator::make($data, [
                'investment_name' => ['required', 'string'],
                'target_amount' => ['required', 'integer'],
                'duration' => ['required', 'json'],
                'roi_percentage' => ['required', 'json'],
                'status' => ['string'],
            ]);
	}

    public function create(Request $request){

    	$validator = $this->validator($request->all());

        if($validator->fails()){
            return response()->json(['status' => 'error', 'message' => 'Validation failed', 'validation_error' => $validator->errors()], 200);
        }

        $addInvestment = Investment::create(
            [
            	'investment_name' => $request->get('investment_name'),
            	'target_amount' => $request->get('target_amount'),
            	'duration' => $request->get('duration'),
            	'roi_percentage' => $request->get('roi_percentage'),
            	'status' => $request->get('status')
            ]
        );

        if($addInvestment){
        	return response()->json(['status' => 'successfule', 'message' => 'Investment added successfully'], 200);
        }

        return response()->json(['status' => 'error', 'message' => 'unable to add Investment'], 200);
    }
}
