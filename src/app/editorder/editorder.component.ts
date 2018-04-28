import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { OrderService } from '../order/order.service';
import { Order } from '../order/orderc';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  public _subscription:Subscription;
  id:number;
  userid:string="";
  source1:string="";
  destination1:string="";
  bookingdate1:string="";
  checkoutdate1:string="";
  checkingdate1:string="";
  amount:number;
  fk_car_id1:number;
  fk_traveller_id1:number;
  fk_car_name1:string="";
  fk_driver_id1:number;
  bookingstatus1:string="";
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public data:OrderService,public ngProgress: NgProgress) { }

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
        this.source1=data[0].source;
        this.destination1=data[0].destination;
        this.bookingdate1=data[0].Booking_date;
        this.checkingdate1=data[0].checking_date;
        this.checkoutdate1=data[0].checkout_date;
        this.amount=data[0].amount;
        this.fk_car_id1=data[0].fk_car_id;
        this.fk_car_name1=data[0].fk_car_name;
        this.fk_driver_id1=data[0].fk_driver_id;
        this.fk_traveller_id1=data[0].fk_traveller_id;
        this.bookingstatus1=data[0].booking_status;
        console.log(this.source1,this.destination1,this.bookingdate1);
      }
    );
  }

  onUpdate(){
    this.ngProgress.start();
    let Car=new Order(null,this.userid,this.source1,this.destination1,this.bookingdate1,this.checkingdate1,this.checkoutdate1,this.amount,this.fk_car_id1,this.fk_car_name1,this.fk_driver_id1,this.fk_traveller_id1,this.bookingstatus1)
    this.data.editOrder(this.id,Car).subscribe(
      ()=>{
        this._router.navigate(['/Order']);
        this.ngProgress.done();
      }
    );
  }

 

}
