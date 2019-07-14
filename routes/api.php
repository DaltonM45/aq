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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::get('/', function () {
//     return view('layouts/principal');
// });

// Route::get('/series', 'SeriesController@index');

// Route::post('/series/guardar', 'SeriesController@store');
// Route::post('/series/{id}', 'SeriesController@destroy');
// Route::put('/series/{id}', 'SeriesController@update');
