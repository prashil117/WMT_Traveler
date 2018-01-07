import { Injectable } from '@angular/core';
import { Traveler } from '../traveller';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class TravellerService {
  public url: string = "http://localhost:3000/temail/";
  public url1: string = "http://localhost:3000/travellers/";
  public url2:string="http://localhost:3000/travellerpassword/"
  content:string="Content-Type";
  header:string="application/json";

  constructor(public _http:HttpClient) { }

  getTravellerByEmail(id)
  {
    return this._http.get(this.url+id);
  }

  editTraveler(id,item){
    let body = JSON.stringify(item);
    return this._http.put(this.url1+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
 
  }

  Resetpassword(id,item)
  {
    let body = JSON.stringify(item);
    return this._http.put(this.url2+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

}
