import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from '../order/order.service';
import { Order } from '../order/orderc';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  public _subscription:Subscription;
  id:number;
  userid:string="";
  source:string="";
  destination:string="";
  bookingdate:string="";
  checkoutdate:string="";
  checkingdate:string="";
  amount:number;
  fk_car_id:number;
  fk_car_name:string="";
  fk_driver_id:number;
  bookingstatus:string="";
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public data:OrderService) { }

  ngOnInit() {

    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
    );

    this.data.orderById(this.id).subscribe(
      (data:Order[])=>{
        console.log(data);
        this.userid=data[0].fk_user_id;
        this.source=data[0].source;
        this.destination=data[0].destination;
        this.bookingdate=data[0].Booking_date;
        this.checkingdate=data[0].checking_date;
        this.checkoutdate=data[0].checkout_date;
        this.amount=data[0].amount;
        this.fk_car_id=data[0].fk_car_id;
        this.fk_car_name=data[0].fk_car_name;
        this.fk_driver_id=data[0].fk_driver_id;
        this.bookingstatus=data[0].booking_status;
  
      }
    );
  }

  onUpdate(){
    let Car=new Order('',this.userid,this.source,this.destination,this.bookingdate,this.checkingdate,this.checkoutdate,this.amount,this.fk_car_id,this.fk_car_name,this.fk_driver_id,'',this.bookingstatus)
    this.data.editOrder(this.id,Car).subscribe(
      ()=>{
        this._router.navigate(['/Order']);
      }
    );
  }

}
