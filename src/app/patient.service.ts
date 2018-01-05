import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientService {

  private ipp : string;

  private httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');

  private URL ='http://localhost:8080/Admission/webresources/generic/patients/'
  constructor(private httpClient: HttpClient) { }

  setIPP(ipp : string) : string {
    return(this.ipp = ipp);
  }

  getIPP() : string {
    return(this.ipp)
  }

  getPatientIPP(ipp : string): Observable<Object> {
    return this.httpClient.get(this.URL + ipp)
  }

  getPatientInfo(nom : string, prenom : string, dateNais : string): Observable<Object> {
    return this.httpClient.get(this.URL + "?nom=" + nom +"&prenom=" + prenom + "&datenaiss=" + dateNais)
  }

  savePatient(name : string, surname : string, birthdate : string, sex : string, secu : string, adress : string, phone : string): Observable<Object> {
  return this.httpClient.post(this.URL, this.generateJSONPatient(name,surname,birthdate,sex,secu,adress,phone), {headers: this.httpHeaders});
  }

  updatePatient(ipp : string, name : string, surname : string, birthdate : string, sex : string, secu : string, adress : string, phone : string): Observable<Object> {
  return this.httpClient.post(this.URL, this.generateJSONPatientUpdate(ipp,name,surname,birthdate,sex,secu,adress,phone), {headers: this.httpHeaders});
  }

  generateJSONPatient (name : string, surname : string, birthdate : string, sex : string, secu : string, adress : string, phone : string): string {
   return '{ ' +
    ' "nom" : "'+ name + '",' +
    ' "prenom" : "'+ surname + '",' +
    ' "dateNaiss" : "'+ birthdate + '",' +
    ' "adresse" : "'+ adress + '",' +
    ' "telephone" : "'+ phone + '",' +
    ' "sexe" : "'+ sex + '",' +
    ' "numSecu" : "'+ secu +
    ' "}';
 }

 generateJSONPatientUpdate (ipp : string, name : string, surname : string, birthdate : string, sex : string, secu : string, adress : string, phone : string): string {
  return '{ ' +
   ' "IPP" : "'+ ipp + '",' +
   ' "nom" : "'+ name + '",' +
   ' "prenom" : "'+ surname + '",' +
   ' "dateNaiss" : "'+ birthdate + '",' +
   ' "adresse" : "'+ adress + '",' +
   ' "telephone" : "'+ phone + '",' +
   ' "sexe" : "'+ sex + '",' +
   ' "numSecu" : "'+ secu +
   ' "}';
}
}
