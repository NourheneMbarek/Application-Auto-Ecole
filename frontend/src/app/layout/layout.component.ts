import { Component, OnInit } from '@angular/core';
import { Coordonnees } from '../viewModels/coordonnees';
import { User } from '../viewModels/user';

@Component({ 
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
 
  constructor() { }
  /*
  tel : Number = 21212121;
  fax = 98989898;
  adresse : String ="Issat Sousse";
  email : String ="adresse@domaine.com";
  */
 data : Coordonnees = new Coordonnees("Auto Ecole" ,
  99999999 ,
   "Isitcom" ,
    78787878 , 
     "autoecole@domaine.com");
     user : User;
     isloggin =false;
     ngOnInit() {
       console.log("test");
       if(typeof(Storage) !== 'undefined'){
         this.user = JSON.parse(sessionStorage.getItem("user"));
         if(this.user != null){
           this.isloggin = true;
         }
       }
     }

}
