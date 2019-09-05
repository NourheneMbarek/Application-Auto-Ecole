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
Route::post('/ajouter_candidat' , 'CandidatController@ajouter');
// ajouter post car depuis l'interface
Route::post('/ajouter_voiture' , 'VoitureController@ajouter');

Route::get('/infos','SeanceController@getInfo');
Route::post('/save_seance','SeanceController@save');
Route::get('/liste_seances' , 'SeanceController@getAll');


Route::post('/ajouter_moniteur' , 'MoniteurController@ajouter');

///car affiche seulmnt
Route::get('/editt_candidat/{id}' , 'CandidatController@editt');
Route::post('/edit_candidat/{id}' , 'CandidatController@edit');//update


//Route::post('/update_candidat/{id}' , 'CandidatController@update');
//moniteur edit et update 
Route::get('/editt_moniteur/{id}' , 'MoniteurController@editt');
Route::post('/edit_moniteur/{id}' ,'MoniteurController@edit');

//edit et  update voiture
Route::get('/edit_voiture/{id}' , 'VoitureController@edit');
Route::post('/update_voiture/{id}' , 'VoitureController@update');
