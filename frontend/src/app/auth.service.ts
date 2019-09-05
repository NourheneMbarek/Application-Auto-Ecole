import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient , private afAuth : AngularFireAuth) { }
  url = 'https://api.myip.com/';

 
  getMyIp(){
    return this.http.get(this.url);
  }
  registerWithEmailAndPassword(email , pass){
    return new Promise<any>((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email , pass)
      .then(res=>{
        resolve(res);
      }
        ,err => reject(err));
      
    });
  }
  loginwithGoogle(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
      resolve(res);
      })
      })
  }
  loginwithFacebook(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
      resolve(res);
      })
      })
  }

}
