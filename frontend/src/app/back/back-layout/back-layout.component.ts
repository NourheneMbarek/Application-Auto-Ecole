import { Component, OnInit } from '@angular/core';

import { User } from 'src/app//viewModels/user';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  } from '@angular/animations';
import { Coordonnees } from 'src/app/viewModels/coordonnees';
@Component({
  selector: 'app-back-layout',
  templateUrl: './back-layout.component.html',
  styleUrls: ['./back-layout.component.css'],
  animations:[
    trigger('sidebaranimate' , [
      state('open', style({
        width: '200px' , 
        display : 'block',
        opacity : 1
        })),
      state('closed', style({
        width : '10px' ,
        display : 'none',
        opacity : 0
        })),
      transition('open => closed',[
          animate('2s')
      ]),
      transition('closed => open',[
        animate('1s')
    ])
    ])
    
  ]
})
export class BackLayoutComponent implements OnInit {



  constructor() { }


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
  isOpen = true;
  animate(){
    this.isOpen = !this.isOpen;
  }

}
