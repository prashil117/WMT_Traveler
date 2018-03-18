import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email:string="";
  name:string="";
  img:string="";
  constructor(public _router:Router,public data:TravellerService) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');
    this.data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.name = data[0].traveller_name;
        this.img=data[0].traveller_img;
      }
    );;
  }

  onEdit()
  {
    this._router.navigate(['/Edittraveller']);
  }

}
