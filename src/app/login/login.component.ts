import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {LoginService  } from './login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './loginc';
import { Traveler } from '../../traveller';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string="";
  password:string="";
  constructor(public _router:Router, public data:LoginService) { }

  ngOnInit() {
  }
  onLogin() {
    let item = new Traveler('',this.email,this.password,'','','');
    this.data.login(item).subscribe(
      (data1:Traveler[]) => {
        console.log(data1);
        if (data1.length==1) {
          localStorage.setItem('Email',this.email);
        this._router.navigate(['/Dashboard']);
          
        }
        else {
          
         alert("Something Wrong");
        }

      },
      function (e) {
        alert(e);
      }
    );
  }
}
