import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { CandidatsService } from 'src/app/candidats.service';
import { User } from 'src/app/viewModels/user';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  ind: any;
  users;
  nom;
  prenom;
  edit_type;
  edit_code_valide;
  edit_nb_heurs;



  constructor(private route: ActivatedRoute,
              private candidatsService : CandidatsService) { 
    this.ind = this.route.snapshot.paramMap.get('id');
    console.log(this.ind);

    
  }

  ngOnInit() {
    this.candidatsService.editt(this.ind)
    .subscribe(res=>{
      console.log(res);

      this.users = Array.of(res);

      
  });

  }

  update(index){
    this.candidatsService.edit( index, this.nom, this.prenom , this.edit_type , this.edit_code_valide , this.edit_nb_heurs)
    .subscribe(res=>{
      console.log(res);
    })
    console.log(index, this.nom , this.prenom );
  }
  sort(){
    (this.users || []).sort((a : User , b:User)=> a.name <b.name ? -1 : 1);
  }
 

}
