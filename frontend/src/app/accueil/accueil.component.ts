import { Component, OnInit } from '@angular/core';
import { User } from '../viewModels/user';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }
  user : User;
  isloggin =false;
  ngOnInit() {
    
  }

}
