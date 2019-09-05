import { Component, OnInit } from '@angular/core';
import { MoniteursService } from 'src/app/moniteurs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moniteurs-edit',
  templateUrl: './moniteurs-edit.component.html',
  styleUrls: ['./moniteurs-edit.component.css']
})
export class MoniteursEditComponent implements OnInit {
  ind: any;
  users;
  nom;
  prenom;
  edit_cin;
  edit_matricule;

  constructor(private route: ActivatedRoute,
    private moniteursService : MoniteursService) { 
    this.ind = this.route.snapshot.paramMap.get('id');
    console.log(this.ind);
  }

  ngOnInit() {
    this.moniteursService.editt(this.ind)
    .subscribe(res=>{
      console.log(res);

      this.users = Array.of(res);

      
  });
  }
 

  update(index){ 
    this.moniteursService.edit( index, this.nom, this.prenom , this.edit_cin , this.edit_matricule)
    .subscribe(res=>{
      console.log(res);
    })
    console.log(index, this.nom, this.prenom , this.edit_cin,this.edit_matricule);
  }

}
 