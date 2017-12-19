import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-afficher-patient',
  templateUrl: './afficher-patient.component.html',
  styleUrls: ['./afficher-patient.component.css']
})
export class AfficherPatientComponent implements OnInit {

  private myPatient: Object;
  private ipp : string;
  constructor( private PatientService : PatientService) { }

  private getMyPatient(): void {
    this.myPatient = this.PatientService.getPatientIPP(this.ipp).subscribe(patient => this.myPatient = patient);
  }

  private setIPP(): string{
    this.ipp = this.PatientService.getIPP();
    return(this.ipp)
  }

  affichePatient() : void {
    this.setIPP();
    if (this.ipp){
      this.getMyPatient();
    }
  }

  ngOnInit() {
  }

}
