import { Injectable } from '@angular/core';
import {Annonce} from '../app/faux-annonces'

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  private annonces: any ;

  constructor() { 
    this.annonces= Annonce;
  }
  getAlll() {
    return this.annonces;
  }
  getAll(){
    return this.annonces;
  }
  getItem(id) {
    for (var i = 0; i < this.annonces.length; i++) {
      if (this.annonces[i].id === parseInt(id)) {
        return this.annonces[i];
      }
    }
    return null;
  }

  remove(item) {
    this.annonces.splice(this.annonces.indexOf(item),1);
  }

}
 