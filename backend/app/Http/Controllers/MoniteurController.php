<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Moniteur;

class MoniteurController extends Controller
{
    
    public function liste_des_moniteurs(){

       // return Moniteur::find(1);
       $moniteurs =Moniteur::all();
       //where('nom' , 'mbarek')->orWhere('prenom' , 'med')->get();
       return $moniteurs ;
    }
    public function supprimer($id){
        Moniteur::find($id)->delete();
        return ['rep' => 'ok'];
    }

    public function ajouter(Request $request){
        $mon = new Moniteur();
        //$request->input("n");
        $mon->nom = $request->input("n");
        //$request->input("p");
        $mon->prenom = $request->input("p");
        $mon->cin = $request->input("c");
        $mon->matricule =$request->input("d");
        $mon->save();
        return ['ok'=>'ok'];
     
    }
    public function editt($id)
    {
        $m = Moniteur::find($id);

        return $m;
    }

    public function update(Request $request, $id)
{
      /*$request->validate([
        'share_name'=>'required',
        'share_price'=> 'required|integer',
        'share_qty' => 'required|integer'
      ]);*/

      $m = Moniteur::find($id);
      $m->nom =$request->input("n");
        $m->prenom=$request->input("p");
        $m->cin=$request->input("c");
        $m->matricule =$request->input("d");
        
        $m->save();

        return ['ok'=>'ok'];
}

public function edit($id , Request $request){

    $m = Moniteur::find($id);
    $m->nom =$request->input("n");
    $m->prenom=$request->input("p");
    $m->cin=$request->input("c");
    $m->matricule = $request->input("d");
   
    $m->save();
    return ['ok'=>'ok'];
   

}


}
