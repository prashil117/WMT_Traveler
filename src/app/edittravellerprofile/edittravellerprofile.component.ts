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
  name1:string="";
  address1:string="";
  city1:string="";
  tid:number; 
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
        this.tid = this.traveller[0].traveller_id;
      }
    );

  }

  onUpdate(){
    let traveler=new Traveler(null,this.name1,this.email,'112',this.address1,'',this.city1);
    this._data.editTraveler(this.tid,traveler).subscribe(
      ()=>{
        this._router.navigate(['/Edittraveller']);
      }
    );
  }

}