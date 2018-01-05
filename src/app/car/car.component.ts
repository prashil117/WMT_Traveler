import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { car } from './carc';
import { Router } from '@angular/router';
import {  TravellerService} from '../traveller.service';
import {Traveler  } from '../../traveller';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car:car[]=[];
  public traveller:Traveler[]=[];
  public tid:number;
  email:string=localStorage.getItem('Email');

  constructor(public data:CarService,public _router:Router,public data1:TravellerService) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data:Traveler[])=>{
        this.traveller=data;
        this.tid=this.traveller[0].traveller_id;
        
      }
    );

    this.data.getCarById(this.email).subscribe(
      (data:any)=>{ 
        this.car=data;
      }
    );
  }

  
  onCarDelete(item)
  {
  
    this.data.deleteCar(item.car_id).subscribe(
      (data:any)=>{
        this.car.splice(this.car.indexOf(item),1);
      }
    );
  }

}
