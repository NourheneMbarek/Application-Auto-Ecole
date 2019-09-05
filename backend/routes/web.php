<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//marche
Route::get('/moniteurs' , 'MoniteurController@liste_des_moniteurs');

//marche
Route::get('/candidats' , 'CandidatController@liste_des_candidats');

//marche si ide voiture possede id_model existe
Route::get('/voitures' , 'VoitureController@liste_des_voitures');

// marche 
Route::get('/voitures1' , 'VoitureController@liste_des_voitures1');



//marche
Route::get('/supprimer_voiture/{id}' , 'VoitureController@supprimer');
// marche
Route::get('/supprimer_candidat/{id}' , 'CandidatController@supprimer');



// marche
Route::get('/supprimer_moniteur/{id}' , 'MoniteurController@supprimer');



