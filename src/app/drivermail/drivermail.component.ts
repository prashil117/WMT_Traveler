import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { DriverService } from '../driver/driver.service';
import { Driver } from "../driver/driverc";
import { Router } from '@angular/router';
import { Traveler } from '../../traveller';
import { TravellerService } from '../traveller.service';
import { OrderService } from '../order/order.service';
import { Order } from '../order/orderc';
import { EmailService } from '../forgot/email.service';
import { Forget } from '../forgot/forgetc';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-drivermail',
  templateUrl: './drivermail.component.html',
  styleUrls: ['./drivermail.component.css']
})
export class DrivermailComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public drivers: Driver[] = [];
  public drivers1: Driver[] = [];
  public order: Order[] = [];
  email: string = localStorage.getItem('Email');
  public traveller: Traveler[] = [];
  public tid:any;
  public delarr: Driver[] = [];
  did: string;
  name: string;
  msg: string;
  no: number;
  tid1:any;
  uemail: string;
  txtsearch: string = "";
  displayedColumns = ['check', 'driver_name', 'driver_license_no', 'Mobile_no', 'driver_action'];
  dataSource: MatTableDataSource<Driver>;

  public _subscription: Subscription;
  constructor(public _router: Router, public _activatedRoute: ActivatedRoute, public data: TravellerService, public data1: DriverService, public data2: OrderService, public data3: EmailService) { }
  id: number;
  ngOnInit() {

    this._subscription = this._activatedRoute.params.subscribe(
      (para: any) => {
        this.id = para["id"];

      }
    );

    this.data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;
        console.log(this.tid);
        localStorage.setItem('tid', this.tid);
        
      }
    );
    this.tid1=localStorage.getItem('tid');
    this.data1.getDriversByTraveller(this.tid1).subscribe(
      (data: any) => {
        this.drivers = data;
        this.drivers1 = data;
        this.dataSource = new MatTableDataSource(this.drivers);
        this.dataSource.paginator = this.paginator;
        console.log(this.drivers);
      }
    );

    this.data2.orderById(this.id).subscribe(
      (data: Order[]) => {
        this.order = data;
        this.uemail = this.order[0].fk_user_id;
        console.log(this.uemail);
      }
    );

    

  }

  sendDriver(item) {
    this.name = item.driver_name;
    this.no = item.driver_license_no;
    this.id=item.driver_id;
    this.msg = this.name + "yess " + this.no;
    this.data3.sendMail(new Forget(this.msg, this.uemail, "Driver Details")).subscribe(
      (data: any) => {

        console.log("msg sent");
      });

      this.data1.changedriver(this.id).subscribe(
        ()=>{
          console.log("Update Done")
        }
      );
  }

}

