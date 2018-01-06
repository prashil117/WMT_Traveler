import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';

@Component({
  selector: 'app-edittravellerprofile',
  templateUrl: './edittravellerprofile.component.html',
  styleUrls: ['./edittravellerprofile.component.css']
})
export class EdittravellerprofileComponent implements OnInit {
  public _subscription:Subscription;
  name:string="";
  address:string="";
  city:string="";
  tid:number; 
  public traveller: Traveler[] = [];
  email:string=localStorage.getItem('Email');
 
  constructor(public _router:Router,public _data:TravellerService) { }

  ngOnInit() {

    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.name = this.traveller[0].traveller_name;
        this.address = this.traveller[0].traveller_address;
        this.city = this.traveller[0].city;
        this.tid = this.traveller[0].traveller_id;
      }
    );

  }

  onUpdate(){
    let traveler=new Traveler(null,this.name,this.email,'112',this.address,'',this.city);
    this._data.editTraveler(this.tid,traveler).subscribe(
      ()=>{
        this._router.navigate(['/Edittraveller']);
      }
    );
  }

}