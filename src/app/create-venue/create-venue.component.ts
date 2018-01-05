import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { VenueService } from '../venue.service';
declare let Materialize:any;

@Component({
  selector: 'app-create-venue',
  templateUrl: './create-venue.component.html',
  styleUrls: ['./create-venue.component.css']
})
export class CreateVenueComponent implements OnInit {
  private ipp : string;

  constructor(private PatientService : PatientService, private VenueService : VenueService) { }

  createVenue(uf : string, dVenue : string, dSortie : string, TypeVenue : string){
    this.ipp = this.PatientService.getIPP();
    this.VenueService.saveVenue(uf,dVenue,dSortie,TypeVenue, this.ipp).subscribe();
    Materialize.toast("Votre venue a bien été enregistrée", 4000);
  }
  ngOnInit() {
  }

}
