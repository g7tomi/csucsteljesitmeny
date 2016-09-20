<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function () {
    return view('index');
});
            
Route::get('/login-page', function () {
    return view('index');
});
Route::get('/registration', function () {
    return view('index');
});
Route::get('/trainings', function () {
    return view('index');
});

     
            
Route::get('/trainings/{trainingOverviews}', function () {
    return view('index');
});
      
Route::get('/trainings/{trainingOverviews}/{content}', function () {
    return view('index');
});
      
            
Route::post('oauth/access_token', function() {
    return Response::json(Authorizer::issueAccessToken());
});

Route::post('register', 'UserHandler\UserController@registerUser');
Route::post('login', 'UserHandler\UserController@loginUser');
