<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Candidat;
class CandidatController extends Controller
{
    //
    public function liste_des_candidats(){

        return Candidat::all();
    } 

    public function supprimer($id){
        Candidat::find($id)->delete();
        return ['rep' => 'ok'];
    }
    public function ajouter(Request $request){
        $candidat = new Candidat();
        //$request->input("n");
        $candidat->nom = $request->input("n");
        //$request->input("p");
        $candidat->prenom = $request->input("p");
        $candidat->type=$request->input("b");
        $candidat->code_valide = $request->input(22);
        $candidat->nb_heurs = $request->input(20);
        $candidat->save();
        return ['ok'=>'ok'];
       
    }
   public function edit($id , Request $request){

        $c = Candidat::find($id);
        $c->nom =$request->input("m");
        $c->prenom=$request->input("p");
        $c->type=$request->input("b");
        $c->code_valide = $request->input(22);
        $c->nb_heurs = $request->input(20);
        $c->save();
        return ['ok'=>'ok'];
       

   }

   public function editt($id)
    {
        $c = Candidat::find($id);

        return $c;
    }

    public function update(Request $request, $id)
{
      /*$request->validate([
        'share_name'=>'required',
        'share_price'=> 'required|integer',
        'share_qty' => 'required|integer'
      ]);*/

      $c = Candidat::find($id);
      $c->nom =$request->get("m");
        $c->prenom=$request->get("p");
        $c->type=$request->get("b");
        $c->code_valide = $request->get(22);
        $c->nb_heurs = $request->get(20);
        $c->save();

        return ['ok'=>'ok'];
}


}
