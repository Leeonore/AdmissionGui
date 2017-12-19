import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ChercherPatientComponent } from './chercher-patient/chercher-patient.component';
import { AfficherPatientComponent } from './afficher-patient/afficher-patient.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

import { PatientService } from './patient.service';

const appRoutes: Routes = [
  { path: 'chercherpatient', component: ChercherPatientComponent },
  { path: 'afficherpatient', component: AfficherPatientComponent },
  { path: 'createpatient', component: CreatePatientComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ChercherPatientComponent,
    AfficherPatientComponent,
    CreatePatientComponent,
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
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
