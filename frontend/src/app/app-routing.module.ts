//seance8
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { OffresComponent } from './offres/offres.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './back/users/users.component';

const routes: Routes = [
  
    { path : "" , 
    component : LayoutComponent , 
    children : [
      { path : "" , 
    component : AccueilComponent} , 
      { path : "contact" , 
      component : ContactComponent},
      { path : "offres" , 
      component : OffresComponent},
      { path : "detail/:id" , 
      component : OffreDetailsComponent},
      { path : "annonces" , 
      component : AnnoncesComponent},
      { path : "annonce_detail" , 
      component : AnnonceDetailComponent},
      { path : "register" , 
      component : RegistreComponent},
      {path : "login" , 
      component : LoginComponent}



    ]},
    {path : 'admin' ,
    loadChildren : './back/back.module#BackModule'},
{ path : "**" , 
      component : ContactComponent}


    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }