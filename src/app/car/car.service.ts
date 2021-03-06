import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { car } from './carc';
import { Traveler } from '../../traveller';

@Injectable()
export class CarService {
  public url: string = "https://wishmytrip.herokuapp.com/cars/";
  public url1: string = "https://wishmytrip.herokuapp.com/caremail/";
  public url2: string = "https://wishmytrip.herokuapp.com/car_deleteall/";
  public url3: string = "https://wishmytrip.herokuapp.com/carimgu/";
  

  constructor(public _http: HttpClient) { }
  content: string = "Content-Type";
  header: string = "application/json";
  email: string = localStorage.getItem('Email');
  public ca: car[] = [];

  getCarById(email) {

    return this._http.get<car[]>(this.url1 + email);
  }

  deleteCar(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
  }


  addCar(item: FormData) {

    //   let body = JSON.stringify(item);
    return this._http.post(this.url, item);
  }
  editCar(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }

  editCarimg(item: FormData) {
    //  let body=JSON.stringify(hotel);
    return this._http.put(this.url3, item);
  }

  getCarBynoId(id) {
    return this._http.get<car[]>(this.url + id);
  }

  deleteAllCar(item: car[]) {
    let body = JSON.stringify(item);
    return this._http.post(this.url2, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }


}

