import { Injectable } from '@angular/core';
import { Traveler } from '../traveller';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TravellerService {
  public url: string = "http://localhost:3000/temail/";

  constructor(public _http:HttpClient) { }

  getTravellerByEmail(id)
  {
    return this._http.get(this.url+id);
  }

}
