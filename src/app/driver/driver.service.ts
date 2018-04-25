import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Driver } from './driverc';
import { Traveler } from '../../traveller';

@Injectable()
export class DriverService {
  public url: string = "http://localhost:3000/drivers/";
  public url1: string ="http://localhost:3000/driveremail/";
  public url2: string ="http://localhost:3000/driverall/";
  public url3:string="http://localhost:3000/driverstatus/";
  public url4:string="http://localhost:3000/travellerdriver/";
  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";
  email: string = localStorage.getItem('Email');
  public tra:Traveler[]=[];

  getDriversByEmail(email) {

    return this._http.get<Driver[]>(this.url1 + email);
  }

  getDriversByTraveller(id) {
    
        return this._http.get<Driver[]>(this.url4 + id);
      }

  deleteDriver(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
  }

 // getTravellerByEmail(email)
 // {
   // return this._http.get<Traveler[]>(this.url1+ email);
  //}

  addDriver(item) {
    
        let body = JSON.stringify(item);
        return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

  editDriver(id,item){
    let body = JSON.stringify(item);
    return this._http.put(this.url+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
 
  }

  getDriverById(id)
  {
    return this._http.get<Driver[]>(this.url+id);
  }

  deleteAllDrivers(item:Driver[])
  {
    let body = JSON.stringify(item);
    return this._http.post(this.url2, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

  changedriver(id)
  {
    
    return this._http.put(this.url3 + id,  { headers: new HttpHeaders().set(this.content, this.header) });

  }

}
