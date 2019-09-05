import { Component, OnInit } from '@angular/core';
import { VoituresService } from 'src/app/service/voitures.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private voituresService : VoituresService) { }

  matricule;
  nom;description;
  users;

  ngOnInit() {
    this.voituresService.getAll()
    .subscribe(res=>{
        console.log(res);
        this.users = res;
    });
    
  }
  ajouter(){
    this.voituresService.add_user(this.matricule , this.nom , this.description)
    .subscribe(res=>{
      console.log(res);
    })
  }

}
