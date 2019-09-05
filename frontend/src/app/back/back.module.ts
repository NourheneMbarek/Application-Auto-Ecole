import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackRoutingModule } from './back-routing.module';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SeancesComponent } from './seances/seances.component';
import { FormsModule } from '@angular/forms';
import { MoniteursComponent } from './moniteurs/moniteurs.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { MoniteursEditComponent } from './moniteurs-edit/moniteurs-edit.component';
import { VoitureEditComponent } from './voiture-edit/voiture-edit.component';

@NgModule({
  declarations: [BackLayoutComponent, DashboardComponent, UsersComponent, SeancesComponent, MoniteursComponent, UsersEditComponent, MoniteursEditComponent, VoitureEditComponent],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule
  ]
})
export class BackModule { }
