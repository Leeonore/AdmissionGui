import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-chercher-patient',
  templateUrl: './chercher-patient.component.html',
  styleUrls: ['./chercher-patient.component.css']
})
export class ChercherPatientComponent implements OnInit {

  private myPatient: Object;
  private name : string;
  private surname : string;
  private birthdate : string;
  constructor( private PatientService : PatientService) {}

  private getMyPatient(): void {
    this.myPatient = this.PatientService.getPatientInfo(this.name, this.surname, this.birthdate).subscribe(patient => this.myPatient = patient)
  }

  searchPatient(nom : string, prenom : string, dateNais : string) : void {
    if (nom && prenom && dateNais){
      this.name = nom;
      this.surname = prenom;
      this.birthdate = dateNais;
      this.getMyPatient();
    }
  }

  setIPP(ipp) : void {
      this.PatientService.setIPP(ipp);
  }


  ngOnInit() {
  }

}
