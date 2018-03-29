import { Injectable } from '@angular/core';
import { Order } from '../order/orderc';
import { car } from '../car/carc';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class OrderService {

  content: string = "Content-Type";
  header: string = "application/json";
  email: string = localStorage.getItem('Email');
  public url: string = "http://localhost:3000/travellerorder/";
  public url1: string = "http://localhost:3000/orderdeleteall/";
  public url2: string = "http://localhost:3000/orderid/";
  constructor(public _http: HttpClient) { }

  getOrderByTraveller(id) {
    return this._http.get(this.url + id);
  }

  JoinOrder()
  {
    return this._http.get(this.url);
  }
  
  deleteOrder(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set(this.content, this.header) });
  }

  editOrder(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set(this.content, this.header) });

  }

  deleteAllOrder(item: Order[]) {
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }

  orderById(id)
  {
    return this._http.get(this.url2 + id);
  }

}
