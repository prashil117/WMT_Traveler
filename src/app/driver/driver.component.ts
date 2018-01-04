import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { Driver } from "./driverc";
import { Router } from '@angular/router';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  public drivers:Driver[]=[];
  email:string=localStorage.getItem('Email');
  constructor(public data1:DriverService,public _router:Router) { }

  ngOnInit() {
    
    this.data1.getDriversById(this.email).subscribe(
      (data:any)=>{
        this.drivers=data;
      }
    );
  }

  onDriverDelete(item)
  {
  
    this.data1.deleteDriver(item.driver_id).subscribe(
      (data:any)=>{
        this.drivers.splice(this.drivers.indexOf(item),1);
      }
    );
  }

}
