import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { VenueService } from '../venue.service';

@Component({
  selector: 'app-afficher-patient',
  templateUrl: './afficher-patient.component.html',
  styleUrls: ['./afficher-patient.component.css']
})
export class AfficherPatientComponent implements OnInit {

  private myPatient: Object;
  private myVenue : Object;
  private ipp : string;
  private iep : string;
  private send = true;
  constructor( private PatientService : PatientService, private VenueService : VenueService) { }

  private getMyPatient(): void {
    this.myPatient = this.PatientService.getPatientIPP(this.ipp).subscribe(patient => this.myPatient = patient);
  }

  private getMyVenue(): void {
    this.myPatient = this.VenueService.getVenuePatient(this.ipp).subscribe(venue => this.myVenue = venue);
  }

  private setIPP(): string{
    this.ipp = this.PatientService.getIPP();
    return(this.ipp)
  }

  private setIEP(iep : string): string{
    this.iep = this.VenueService.setIEP(iep);
    return(this.iep)
  }

  affichePatient() : void {
    this.setIPP();
    if (this.ipp){
      this.getMyPatient();
      this.getMyVenue();
    }
  }

  ngOnInit() {
    if(this.send){
      this.affichePatient();
      this.send = false;
    }
  }

}
