import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VenueService {

  private iep : string;

  private httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');

  private URL ='http://localhost:8080/Admission/webresources/generic/venues/'
  private URLListe ='http://localhost:8080/Admission/webresources/generic/listvenues/'
  constructor(private httpClient: HttpClient) { }

  setIEP(iep : string) : string {
    console.log("testtestavant" + iep);
    return(this.iep = iep);
  }

  getIEP() : string {
    return(this.iep)
  }

  getVenueIEP(iep : string): Observable<Object> {
    return this.httpClient.get(this.URL + iep)
  }

  getVenuePatient(ipp : string): Observable<Object> {
    return this.httpClient.get(this.URLListe + ipp)
  }

  updateVenue(iep : string,uf : string, dVenue : string, dSortie : string, typeVenue : string, ipp:string): Observable<Object> {
    return this.httpClient.post(this.URL, this.generateJSONUpdateVenue(iep,uf, dVenue, dSortie, typeVenue, ipp), {headers: this.httpHeaders});
    }

      generateJSONUpdateVenue (iep : string, uf : string, dVenue : string, dSortie : string, typeVenue : string, ipp : string): string {
       return '{ ' +
        ' "IEP" : "'+ iep + '",' +
        ' "UFtraitement" : "'+ uf + '",' +
        ' "dateSortie" : "'+ dVenue + '",' +
        ' "dateVenue" : "'+ dSortie + '",' +
        ' "typeVenue" : "'+ typeVenue + '",' +
        ' "patient" : {"IPP" : "'+ ipp + '"}' +
        ' }';
     }

     saveVenue(uf : string, dVenue : string, dSortie : string, typeVenue : string, ipp:string): Observable<Object> {
       console.log("testtest" + this.generateJSONVenue(uf, dVenue, dSortie, typeVenue, ipp));
       return this.httpClient.post(this.URL, this.generateJSONVenue(uf, dVenue, dSortie, typeVenue, ipp), {headers: this.httpHeaders});
       }

  generateJSONVenue (uf : string, dVenue : string, dSortie : string, typeVenue : string, ipp : string): string {
    return '{ ' +
     ' "UFtraitement" : "'+ uf + '",' +
     ' "dateSortie" : "'+ dVenue + '",' +
     ' "dateVenue" : "'+ dSortie + '",' +
     ' "typeVenue" : "'+ typeVenue + '",' +
     ' "patient" : {"IPP" : "'+ ipp + '"}' +
     ' }';
 }
}
