import { Component, OnInit } from '@angular/core';
import { CarService } from '../car/car.service';
import { car } from '../car/carc';
import { Router } from '@angular/router';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  name: string = "";
  desc: string = "";
  rate: number;
  color: string = "";
  type: string = "";
  category: string = "";
  public car: car[] = [];
  public traveller: Traveler[] = [];
  public tid: number;
  email: string = localStorage.getItem('Email');


  constructor(public data: CarService, public _router: Router, public data1: TravellerService) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;

      }
    );
  }
  onAdd() {

    alert(this.type);
    alert(this.category);
    this.data.addCar(new car(this.name, this.color, this.type, '', this.rate, this.desc, this.category,this.tid)).subscribe(
      (data: car[]) => {
        console.log(data);
        console.log(this.type);
        console.log(this.category);
        this._router.navigate(['/Car']);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }

}
