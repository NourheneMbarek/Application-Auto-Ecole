import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoniteursService {

  
  constructor(private http : HttpClient) { }
  //on ajoute httpOptions pour dire on a utiliser format JSON
    httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    add_user(nom , prenom , cin , matricule){
      let body = {'n' : nom , 'p' : prenom , 'c' : cin , 'd' : matricule};
   
      return this.http.post('http://localhost:8000/api/ajouter_moniteur' , body, this.httpOptions);
    }

    delete(id){
      return this.http.delete('http://localhost:8000/public/supprimer_candidat/'+id);
    }
    getAll(){
      return this.http.get('http://localhost:8000/moniteurs');
    }

    editt(id){
    
      return this.http.get('http://localhost:8000/api/editt_moniteur/'+id);
    }
    edit(id, nom, prenom, cin , matricule){
      let body ={ 'n' :nom , 'p' : prenom , 'c' : cin , 'd' : matricule}
      return this.http.post('http://localhost:8000/api/edit_moniteur/'+id, body, this.httpOptions);
    }
}
 