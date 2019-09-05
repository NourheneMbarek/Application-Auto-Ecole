import { Component, OnInit } from '@angular/core';
import { SeanceService } from 'src/app/seance.service';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {

  moniteur : any;
  voiture : any;
  candidat : any;
  date_seance : any;
  heur_seance : any;
  type: any;
  exist = false;
  constructor(private seanceService : SeanceService) { }


  liste_candidats;
  liste_voitures;
  liste_moniteurs;
  emplois;
  ngOnInit() {

    this.getSeances();
    
    //appler une fonct
    //data any car notre data personnaliser
    this.seanceService.getInfo()
    .subscribe((data : any)=>{
      this.liste_candidats=data.candidats;
      this.liste_moniteurs= data.moniteurs;
      this.liste_voitures=data.voitures;
    },err=>{

    })
  }
  getSeances(){
    this.seanceService.getSeances()
    .subscribe((data:any)=>{
      this.emplois = data;
    })}
  save(){
    console.log(this.candidat);
    this.seanceService.save(this.moniteur , this.candidat , this.voiture , this.type, this.date_seance , this.heur_seance)
    .subscribe(
      (data : any)=>{
        console.log(data);
        this.getSeances();
      },err=>{}
    )
 
  }
  check(){
    this.exist=false;
    if(this.moniteur != undefined && this.date_seance != undefined && this.heur_seance !=undefined)
    //pour chaque journée 
    this.emplois.forEach(jour => {
      if(jour.date == this.date_seance){
        jour.seance.forEach(ligne => {
          console.log(ligne.heure);
          console.log(this.heur_seance);
          console.log(this.moniteur);
          //heure il faut l meme base et liste il faut l meme
          if(ligne.heure == this.heur_seance){
            ligne.liste.forEach(s => {
              if(s.id_moniteur == this.moniteur){
                this.exist = true;
              }
              
            });
           
          }
          
        });
        
      }
      
    });
    




    
  }

}
