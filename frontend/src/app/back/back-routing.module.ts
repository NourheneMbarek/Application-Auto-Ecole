import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SeancesComponent } from './seances/seances.component';
import { MoniteursComponent } from './moniteurs/moniteurs.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { MoniteursEditComponent } from './moniteurs-edit/moniteurs-edit.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';

const routes: Routes = [
  {path : '' ,
  component: BackLayoutComponent ,
  children : [
    {path : 'voitures',
    component : DashboardComponent},
    {path : 'voituresedit/:id',
    component : VoitureEditComponent},
    {path : 'users',
    component : UsersComponent},
    {path : 'usersedit/:id',
    component : UsersEditComponent},
    {
      path : 'seances',
      component : SeancesComponent
    },
    {
      path:'moniteurs' , 
      component : MoniteursComponent
    },
    {
      path:'moniteursedit/:id' , 
      component : MoniteursEditComponent
    }
    
  ]},
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
