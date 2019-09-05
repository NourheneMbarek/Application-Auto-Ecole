import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Offre } from '../offre';
import { OffreServiceService } from '../offre-service.service';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements OnInit {
  public offre: any;
  constructor(private route : ActivatedRoute , public offserv :OffreServiceService) { }
  myid : String;
  mynumber : Number;
  parametre :any;
  ngOnInit() {
    //console.log(this.route.snapshot.params["id"]);
    this.parametre = this.route.snapshot.paramMap.get('id');
    this.offre = this.offserv.getItem(this.parametre);

  }

}
