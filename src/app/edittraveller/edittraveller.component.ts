import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';

@Component({
  selector: 'app-edittraveller',
  templateUrl: './edittraveller.component.html',
  styleUrls: ['./edittraveller.component.css']
})
export class EdittravellerComponent implements OnInit {
  public _subscription:Subscription;
  name1:string="";
  address1:string="";
  city1:string=""; 
  public traveller: Traveler[] = [];
  email:string=localStorage.getItem('Email');
 
  constructor(public _router:Router,public _data:TravellerService) { }

  ngOnInit() {

    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.name1 = this.traveller[0].traveller_name;
        this.address1 = this.traveller[0].traveller_address;
        this.city1 = this.traveller[0].city;
      }
    );

  }

  EditTraveller()
  {
    this._router.navigate(['/Edittravellerprofile']);
  }

  Resetpasswword()
  {
    this._router.navigate(['/Resetpassword']);
  }

}
