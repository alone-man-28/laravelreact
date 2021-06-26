<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\API\EmployeeController;
use Illuminate\Support\Facades\Log;
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

Route::get('/','TestController@list');

Route::get('/user','UserController@list');

Route::get('/user/{role}','UserController@detail');

Route::get('/user/delete/{role}','UserController@delete');


// Route::get('/user/edit/{role}','UserController@edit');

Route::get('/user/editdone/{role}','UserController@editdone');
