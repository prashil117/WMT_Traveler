import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver/driver.service';
import { Driver } from '../driver/driverc';
import { Router } from '@angular/router';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css']
})
export class AdddriverComponent implements OnInit {
  name:string="";
  no:number;
  mob:string="";
  public driver: Driver[] = [];
  public traveller: Traveler[] = [];
  public tid: number;
  email: string = localStorage.getItem('Email');
  constructor(public data: DriverService, public _router: Router, public data1: TravellerService) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;

      }
    );

    
  }

  onAdd(addform) {

    this.name=addform.value.driver_name;
    this.no=addform.value.driver_license_no;
    this.mob=addform.value.Mobile_no;
        this.data.addDriver(new Driver(null,this.name, this.no, this.mob,this.tid)).subscribe(
          (data: Driver[]) => {
            console.log(data);
            this._router.navigate(['/Driver']);
          },
          function (err) {
            alert(err);
          },
          function () {
    
          }
        );
      }


}
