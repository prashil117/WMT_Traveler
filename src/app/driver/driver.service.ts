import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver } from './driverc';
import { Traveler } from '../../traveller';

@Injectable()
export class DriverService {
  public url: string = "http://localhost:3000/drivers/";
 // public url1: string = "http://localhost:3000/te/";
  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";
  email: string = localStorage.getItem('Email');
  public tra:Traveler[]=[];

  getDriversById(email) {

    return this._http.get<Driver[]>(this.url + email);
  }

  deleteDriver(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
  }

 // getTravellerByEmail(email)
 // {
   // return this._http.get<Traveler[]>(this.url1+ email);
  //}


}
