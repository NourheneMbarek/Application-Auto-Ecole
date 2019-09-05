import { Component, OnInit } from '@angular/core';
import { VoituresService } from 'src/app/service/voitures.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voiture-edit',
  templateUrl: './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit {
  ind: any;
  users;
  matricule;
  nom;
  description;
  constructor(private route: ActivatedRoute,
    private voitureService :VoituresService) { 
      this.ind = this.route.snapshot.paramMap.get('id');
    console.log(this.ind);
    }

  ngOnInit() {
    this.voitureService.edit(this.ind)
    .subscribe(res=>{
      console.log(res);

      this.users = Array.of(res);

      
  });
  }

  update(index){
    this.voitureService.update( index, this.matricule, this.nom , this.description)
    .subscribe(res=>{
      console.log(res);
    })
    console.log(index, this.matricule , this.nom );
  }

}
