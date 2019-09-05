import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoituresService {

  constructor(private http : HttpClient) { }
  //on ajoute httpOptions pour dire on a utiliser format JSON
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  add_user(matricule , nom , description ){
    let body = {'m' : matricule, 'n' : nom , 'd' : description};

    return this.http.post('http://localhost:8000/api/ajouter_voiture' , body, this.httpOptions);
  }

  getAll(){
    return this.http.get('http://localhost:8000/voitures1');
  }
  edit(id){
    return this.http.get('http://localhost:8000/api/edit_voiture/'+id);
  } 
  update(id, matricule , nom , description){
    let body ={  'm' : matricule , 'n' : nom , 'd' : description  }
    return this.http.post('http://localhost:8000/api/update_voiture'+id, body , this.httpOptions)

  }
}
