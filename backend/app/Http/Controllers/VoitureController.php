<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Voiture;

class VoitureController extends Controller
{
    //
    public function liste_des_voitures(){
        $voiture = Voiture::find(6);
        
       return $voiture->get_model;
     }
     public function liste_des_voitures1(){
      $voiture = Voiture::all();
      
     return $voiture ;
   }
 
     public function supprimer($id){
        Voiture::find($id)->delete();
        return "ok";
     }

     public function ajouter(Request $request){
        $v = new Voiture();
        $v->matricule = $request->input("m");;
        
        $v->nom = $request->input("n");
        $v->description = $request->input("d");
        
        $v->model_id = 1;
        $v->save();
        return ['ok'=>'ok'];
     }

     public function update($id , Request $request){

      $v =  Voiture::find($id);
      $v->matricule = $request->input("m");;
        
      $v->nom = $request->input("n");
      $v->description = $request->input("d");

      $v->model_id = 1;
        $v->save();
        return ['ok'=>'ok'];

 }

 public function edit($id)
  {
      $v =  Voiture::find($id);

      return $v;
  }

} 
