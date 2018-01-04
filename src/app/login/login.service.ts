import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Traveler } from '../../traveller';

@Injectable()
export class LoginService {
  public url:string="http://localhost:3000/traveller_login/";
  constructor(public _http:HttpClient) { }
  login(item)
  {
    let body=JSON.stringify(item);
  
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
