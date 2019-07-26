import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of, throwError, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
// import "rxjs/add/operator/map";
import { Url } from 'url';
//import 'rxjs/add/operator/catch';
import { appointment, appointment1 } from './models';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://172.31.3.38:8000/appointments/?format=json";
@Injectable({
  providedIn: 'root'
})
export class RemoteServiceService {

  constructor(private http: Http, private httpClient : HttpClient) { }

  public getAppointment() : Observable<appointment[]> {
    return this.httpClient.get<appointment[]>(API_URL);

  }

  public createAppointment() {
    // will use this.http.post()
  }
}

