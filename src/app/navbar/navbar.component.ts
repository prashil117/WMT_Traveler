import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email:string="";
  constructor(public _router:Router) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');
  }

  onEdit()
  {
    this._router.navigate(['/Edittraveller']);
  }

}
