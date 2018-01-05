import { Component, OnInit } from '@angular/core';
import { VenueService } from '../venue.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-modifier-venue',
  templateUrl: './modifier-venue.component.html',
  styleUrls: ['./modifier-venue.component.css']
})
export class ModifierVenueComponent implements OnInit {

  private myVenue : Object;
  private iep : string;
  private ipp : string;
  private send = true;
  constructor(private VenueService : VenueService, private PatientService : PatientService) { }

  private getMyVenue(): void {
    this.myVenue = this.VenueService.getVenueIEP(this.iep).subscribe(venue => this.myVenue = venue);
  }

  private setIEP(): string{
    this.iep = this.VenueService.getIEP();
    return(this.iep)
  }

  afficheInformation() : void {
    this.setIEP();
    if (this.iep){
      this.getMyVenue();
    }
  }

  modifierVenue(uf : string, dVenue : string, dSortie : string, typeVenue : string){
    this.VenueService.updateVenue(this.iep,uf, dVenue, dSortie, typeVenue, this.ipp).subscribe();
  }
  ngOnInit() {
    if(this.send){
      this.afficheInformation();
      this.ipp = this.PatientService.getIPP();
      this.send = false;
    }
  }

}
