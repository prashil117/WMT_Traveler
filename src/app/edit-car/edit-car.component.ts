import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Driver } from '../driver/driverc';
import { Traveler } from '../../traveller';
import { DriverService } from '../driver/driver.service';
import { TravellerService } from '../traveller.service';
import {  CarService} from '../car/car.service';
import {  car} from '../car/carc';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  public traveller: Traveler[] = [];
  

  email:string=localStorage.getItem('Email');
  public tid: number;
  public _subscription:Subscription;
  id:number;
  name:string="";
  rate:number;
  color:string="";
  category:string="";
  type:string="";
  desc:string="";
img:string="";
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravellerService,public data:CarService) { }

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


  this.data.getCarById(this.id).subscribe(
    (data:car[])=>{
      this.name=data[0].car_name;
      this.color=data[0].car_color;
      this.type=data[0].car_type;
      this.img=data[0].car_img;
      this.rate=data[0].car_rate;
      this.desc=data[0].car_details;


    }
  );
  


  }
  onUpdate(){
    let Car=new car(this.name,this.color,this.type,'',this.rate,this.desc,this.category,this.tid)
    this.data.editCar(this.id,Car).subscribe(
      ()=>{
        this._router.navigate(['/Cars']);
      }
    );
  }

}
