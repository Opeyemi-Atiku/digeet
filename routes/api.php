<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/** Account, Auth Module Route */
$router->group(['prefix' => 'account'], function ($router) {
    $router->post('register', 'Auth\RegisterController@create');

    $router->group(['middleware' => 'jwt.auth'], function ($router){
    	$router->post('update-info', 'Auth\RegisterController@updateInfo');
    	$router->post('upgrade-plan', 'UserController@upgradePlan');
    	$router->post('send-verification-mail', 'UserController@sendVerificationMail');
    	$router->post('bvn-info', 'UserController@getBvnInfo');
    	$router->post('update-bvn-status', 'UserController@updateBvnStatus');
    });

    $router->post('login', 'Auth\LoginController@login');

    $router->post('logout', 'Auth\RegisterController@logout');
    $router->get('me', 'Auth\RegisterController@me');

});

$router->post('verify-email', 'UserController@verifyEmail');


$router->group(['prefix' => 'investment'], function ($router){
	$router->post('add', 'InvestmentController@create');
});




//route for ssr not needed yet
Route::get('{any}', 'HomeController@index')->where('any','.*');