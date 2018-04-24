import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Driver } from '../driver/driverc';
import { Traveler } from '../../traveller';
import { DriverService } from '../driver/driver.service';
import { TravellerService } from '../traveller.service';

@Component({
  selector: 'app-editdriver',
  templateUrl: './editdriver.component.html',
  styleUrls: ['./editdriver.component.css']
})
export class EditdriverComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public name:string="";
  public no:number;
  public mob:string="";
  public tid: number;
  public traveller: Traveler[] = [];
  avaibility:string="";
  email:string=localStorage.getItem('Email');
  
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravellerService,public data:DriverService) { }

  ngOnInit() {

    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;

      }
    );

    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );

  this.data.getDriverById(this.id).subscribe(
    (data:Driver[])=>{
      this.name=data[0].driver_name;
      this.mob=data[0].Mobile_no;
      this.no=data[0].driver_license_no;
      this.avaibility=data[0].driver_status;
    }
  );
  }

  onUpdate(){
    let driver=new Driver(null,this.name,this.no,this.mob,this.avaibility,this.tid);
    this.data.editDriver(this.id,driver).subscribe(
      ()=>{
        this._router.navigate(['/Driver']);
      }
    );
  }

}
