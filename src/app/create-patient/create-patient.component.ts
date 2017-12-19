import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  constructor(private PatientService : PatientService) { }

  createPatient(name : string, surname : string, birthdate : string, sex : string, secu : string, adress : string, phone : string){
    this.PatientService.savePatient(name,surname,birthdate,sex,secu,adress,phone).subscribe();


  }
  
  setIPP(ipp) : void {
      this.PatientService.setIPP(ipp);
  }


  ngOnInit() {
  }

}
