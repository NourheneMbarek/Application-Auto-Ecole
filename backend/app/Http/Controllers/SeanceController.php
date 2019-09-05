<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Candidat;
use App\Moniteur;
use App\Voiture;
use App\Seance;
use Carbon\Carbon;
class SeanceController extends Controller
{
    //
    public function getInfo(){
        $candidats= Candidat::all();
        return ['candidats' =>$candidats, 'moniteurs'=> Moniteur::all(), 'voitures'=>Voiture::all()];
    }

    public function save(Request $request){
        //récupération des attributs
        $candidat_id = $request->input('candidat');
        $moniteur_id = $request->input('moniteur');
        $voiture_id = $request->input('voiture');
        $date = $request->input('date_seance');
        $heurs = $request->input('heur_seance');
        $type = $request->input('type');

        $s = new Seance();
        $s->id_candidat = $candidat_id;
        $s->id_moniteur = $moniteur_id;
        $s->id_voiture = $voiture_id;
        $s->date = $date;
        $s->heure = $heurs;
        $s->type= $type;

        $s->save();
        return["msg" => "seance ajoute avec succes"];
    }
    public function getAll(){
        $data =Seance::join('candidats','seances.id_candidat','=','candidats.id')
        ->where('date' , '>=',Carbon::now())
        ->join('moniteurs','seances.id_moniteur','=','moniteurs.id')
        ->select('seances.*','candidats.nom as nom_c','candidats.prenom as prenom_c',
        'moniteurs.nom as nom_m','moniteurs.prenom as prenom_m')
        ->get()
        ->groupBy('date');
        $result = array();
        //all()->groupBy('date');
        //table d'affichage
        $result = array();
            //$data as $value 
            //transformation de la format 
        foreach($data as $date => $seances){

            $ligne =array();
            $ligne['date']=$date;
            $ligne['seance']=array();
           
            $liste_seances = $seances->groupBy('heure');
            for($i='9' ; $i < '18' ; $i++)
            {
                $tuple=array();
                $tuple['heure']=$i;
                if(@$liste_seances[$i]){

                
                $tuple['liste']=$liste_seances[$i];
            }else {
                    $tuple['liste']=array();
                }
                array_push($ligne['seance'] , $tuple);
                
            }
            
            array_push($result , $ligne);

        }



        return $result;
    }

}
