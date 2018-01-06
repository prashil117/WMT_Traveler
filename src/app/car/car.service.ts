import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  car} from './carc';
import { Traveler } from '../../traveller';

@Injectable()
export class CarService {
  public url: string = "http://localhost:3000/cars/";

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";
  email: string = localStorage.getItem('Email');
  public ca:car[]=[];

  getCarById(email) {
    
        return this._http.get<car[]>(this.url + email);
      }
    
      deleteCar(id: number) {
        return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
      }


        addCar(item) {
          
              let body = JSON.stringify(item);
              return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
        }
        editCar(id,item){
          let body = JSON.stringify(item);
          return this._http.put(this.url+id, body, { headers: new HttpHeaders().set(this.content, this.header) });
       
        }
      
} 

