import { Component, OnInit,ViewChild } from '@angular/core';
import { CarService } from '../car/car.service';
import { car } from '../car/carc';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'
import {  TravellerService} from '../traveller.service';
import {Traveler  } from '../../traveller';
import { OrderService } from '../order/order.service';
import { Order } from '../order/orderc';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatPaginator)paginator:MatPaginator;
  public car:car[]=[];
  public car1:car[]=[];
  public order:Order[]=[];
  public traveller:Traveler[]=[];
  public delarr:Order[]=[];
  public tid:string;
  public car_name:string="";
  email:string=localStorage.getItem('Email');
  displayedColumns = ['check','fk_user_id','source','destination', 'Booking_date','checking_date','checkout_date','amount','car_id','car_name','car_action'];
  dataSource: MatTableDataSource<Order>;
  constructor(public data:CarService,public _router:Router,public data1:TravellerService,public data_1:OrderService) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data:Traveler[])=>{
        this.traveller=data;
        this.tid=this.traveller[0].traveller_id.toString();
        console.log("car"+this.tid);
     //   this.dataSource = new MatTableDataSource(this.traveller);
        console.log(this.traveller);
        localStorage.setItem('tid',this.tid.toString());
      }
    );

    this.data.getCarById(this.email).subscribe(
      (data:any)=>{ 
        this.car=data;
        this.car1=data;
/*        this.dataSource = new MatTableDataSource(this.car);
        this.dataSource.paginator=this.paginator;*/
        console.log(this.car);
      }
    );
   // console.log("Tid"+this.tid);
   this.tid=localStorage.getItem('tid');
    this.data_1.getOrderByTraveller(this.tid).subscribe(
      (data:any)=>{
        this.order=data;
        this.dataSource = new MatTableDataSource(this.order);
        this.dataSource.paginator=this.paginator
        console.log(this.order);
      }
    );

    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onOrderDelete(item)
  {
  
    this.data_1.deleteOrder(item.order_id).subscribe(
      (data:any)=>{
        this.car.splice(this.car.indexOf(item),1);
      }
    );
  }

  editOrder(item){
    
     this._router.navigate(['/Editorder',item.order_id]);
   }


   i:number=0;
   
     checkChange(item:Order)
       {
         
           if(this.delarr.find(x=>x==item))
           {
             this.delarr.splice(this.delarr.indexOf(item),1);
           }
           else
           {
             this.delarr.push(item);
           }
           console.log(this.delarr);
         
       }
     deleteAll()
     {
       
       if(confirm("Are you sure you want to delete"))
       {
         
         this.data_1.deleteAllOrder(this.delarr).subscribe(
           (data:any)=>{
             for(this.i=0;this.i<this.delarr.length;this.i++)
             {
               this.car.splice(this.order.indexOf(this.delarr[this.i]),1);
               console.log("DONE");
             }
             this.car1=[];
           },
           function(err)
           {
             console.log(err);
           },
           function()
           {
           });
       }
     }
     
     sendDriver(item){
      
       this._router.navigate(['/Drivermail',item.order_id]);
     }

}


