import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';
import { NgProgress } from 'ngx-progressbar';

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
  img:string;
  public traveller: Traveler[] = [];
  email:string=localStorage.getItem('Email');
 
  constructor(public _router:Router,public _data:TravellerService,public ngProgress: NgProgress) { }

  ngOnInit() {

    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.name1 = this.traveller[0].traveller_name;
        this.address1 = this.traveller[0].traveller_address;
        this.city1 = this.traveller[0].city;
        this.img=this.traveller[0].traveller_img;
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

  SignOut(){
    this._router.navigate(['/Login']);
  }

}
