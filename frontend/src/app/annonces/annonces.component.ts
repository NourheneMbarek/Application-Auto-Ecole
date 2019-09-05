import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnnonceServiceService  } from '../annonce-service.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  public annonces : any 

  constructor(private router : Router , public annonceService : AnnonceServiceService) { 

   // this.annonces = annonceService.getAlll();
   this.annonces = annonceService.getAll();
  }
 
  ngOnInit() {
    
  }

  btnDetail(index:number){
    
}
  


}
