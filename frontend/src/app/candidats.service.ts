import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
}) 
export class CandidatsService {

  constructor(private http : HttpClient) { }
//on ajoute httpOptions pour dire on a utiliser format JSON
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  add_user(nom , prenom , type , code_valide , nb_heurs){
    let body = {'n' : nom , 'p' : prenom , 'b':type , 22 : code_valide , 20 : nb_heurs};

    return this.http.post('http://localhost:8000/api/ajouter_candidat' , body, this.httpOptions);
  }
  getAll(){
    return this.http.get('http://localhost:8000/candidats');
  }

  delete(id){
    return this.http.delete('http://localhost:8000/supprimer_candidat/'+id);
  }

  edit(id, nom, prenom, type , code_valide , nb_heurs){
    let body ={ 'm' :nom , 'p' : prenom, 'b' : type , 22 : code_valide , 20 : nb_heurs}
    return this.http.post('http://localhost:8000/api/edit_candidat/'+id, body, this.httpOptions);
  }
  
  editt(id){
    
    return this.http.get('http://localhost:8000/api/editt_candidat/'+id);
  }
  /*update(id, nom, prenom, type , code_valide , nb_heurs){
    let body ={ 'm' :nom , 'p' : prenom, 'b' : type , 22 : code_valide , 20 : nb_heurs}
    return this.http.post('http://localhost:8000/api/update_candidat/'+id, body, this.httpOptions);
  }*/
  
} 
