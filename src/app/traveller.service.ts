import { Injectable } from '@angular/core';
import { Traveler } from '../traveller';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class TravellerService {
  public url: string = "https://wishmytrip.herokuapp.com/temail/";
  public url1: string = "https://wishmytrip.herokuapp.com/travellers/";
  public url2:string="https://wishmytrip.herokuapp.com/travellerpassword/";
  public url3: string = "https://wishmytrip.herokuapp.com/travellerimgu/";
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

  editTravellerimg(item: FormData) {
    //  let body=JSON.stringify(hotel);
    return this._http.put(this.url3, item);
  }

  Resetpassword(id,item)
  {
    let body = JSON.stringify(item);
    return this._http.put(this.url2+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

}
