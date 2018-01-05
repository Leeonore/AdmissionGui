import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.css']
})

export class ModifierPatientComponent implements OnInit {

  private myPatient: Object;
  private myVenue : Object;
  private ipp : string;
  private send = true;
  constructor( private PatientService : PatientService) { }

  private getMyPatient(): void {
    this.myPatient = this.PatientService.getPatientIPP(this.ipp).subscribe(patient => this.myPatient = patient);
  }

  private setIPP(): string{
    this.ipp = this.PatientService.getIPP();
    return(this.ipp)
  }

  afficheInformation() : void {
    this.setIPP();
    if (this.ipp){
      this.getMyPatient();
    }
  }

  modifierPatient(name : string, surname : string, birthdate : string, sex : string, secu : string, adress : string, phone : string){
    this.PatientService.updatePatient(this.ipp,name,surname,birthdate,sex,secu,adress,phone).subscribe();
  }
  ngOnInit() {
    if(this.send){
      this.afficheInformation();
      this.send = false;
    }
  }

}
