import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OffreServiceService } from '../offre-service.service';
 
@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  public offres : any 

  constructor(private router : Router , public offService : OffreServiceService) { 

    this.offres = offService.getAlll();
  }
 
  ngOnInit() {
    
  }

  btnDetail(index:number){
    
}
  

}
