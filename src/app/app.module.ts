import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { PatientService } from './patient.service';
import { VenueService } from './venue.service';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ChercherPatientComponent } from './chercher-patient/chercher-patient.component';
import { AfficherPatientComponent } from './afficher-patient/afficher-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { CreateVenueComponent } from './create-venue/create-venue.component';
import { ModifierVenueComponent } from './modifier-venue/modifier-venue.component';

const appRoutes: Routes = [
  { path: '', component: ChercherPatientComponent },
  { path: 'afficherpatient', component: AfficherPatientComponent },
  { path: 'createpatient', component: CreatePatientComponent },
  { path: 'modifierpatient', component: ModifierPatientComponent },
  { path: 'createvenue', component: CreateVenueComponent },
  { path: 'modifiervenue', component: ModifierVenueComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ChercherPatientComponent,
    AfficherPatientComponent,
    CreatePatientComponent,
    ModifierPatientComponent,
    CreateVenueComponent,
    ModifierVenueComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PatientService, VenueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
