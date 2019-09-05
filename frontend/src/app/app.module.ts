import { BrowserModule  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { OffresComponent } from './offres/offres.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

import { AgmCoreModule} from '@agm/core';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LayoutComponent,
    ContactComponent,
    OffresComponent,
    OffreDetailsComponent,
    AnnoncesComponent,
    AnnonceDetailComponent,
    LoginComponent,
    RegistreComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatInputModule, MatButtonModule, MatSelectModule, MatIconModule ,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
