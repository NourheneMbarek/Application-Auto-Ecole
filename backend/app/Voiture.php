<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Voiture extends Model
{
    //
    public function get_model(){

        return $this->belongsTo('App\Modele' , 'model_id' , 'id');
    }
}
