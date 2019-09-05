import { Component, OnInit } from '@angular/core';
import { User } from '../viewModels/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }

  loginGroup;
  user : User = new User();
  ngOnInit() {
    this.loginGroup = new FormGroup({
      'email' : new FormControl(Validators.required , Validators.email),
      
      'password' : new FormControl(Validators.required)
    });
  }

  login(){
    console.log(this.user);
    if(typeof(Storage) !== 'undefined'){
      sessionStorage.setItem("email" , this.user.email);
      sessionStorage.setItem("user" , JSON.stringify(this.user));
      this.router.navigate(['/']);
    }
  }

}
