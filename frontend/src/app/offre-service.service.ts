import { Injectable } from '@angular/core';
import {Offre} from '../app/faux-offre'

@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {
  private offres : any ;

  constructor() { 
    this.offres = Offre ;
  }
  getAlll() {
    return this.offres;
  }

  getItem(id) {
    for (var i = 0; i < this.offres.length; i++) {
      if (this.offres[i].id === parseInt(id)) {
        return this.offres[i];
      }
    }
    return null;
  }

  remove(item) {
    this.offres.splice(this.offres.indexOf(item),1);
  }


}
