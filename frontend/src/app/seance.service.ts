import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor( private http : HttpClient) { }
   entete={
     'headers' : new HttpHeaders({
      'ContentType' : 'application\json'
     })
   }

   
  
 //intermediare entre component 
 //
  getInfo(){
    return this.http.get('http://localhost:8000/api/infos');

  } 
  save(m, c , v , t , date , heur){
    let body={
      //nom ili mech yrecuperih laravel
      moniteur : m,
      candidat : c ,
      voiture : v,
      date_seance : date,
      heur_seance : heur, 
      type : t
    }
    return this.http.post('http://localhost:8000/api/save_seance', body);
  }
  getSeances(){
    return this.http.get('http://localhost:8000/api/liste_seances');
  }
}
