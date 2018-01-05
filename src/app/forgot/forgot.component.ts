import { Component, OnInit } from '@angular/core';
import { Traveler } from '../../traveller';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Forget } from './forgetc';
import { EmailService } from './email.service';
import { TravellerService } from '../traveller.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email:string="";
  msg:string="";
  constructor(public _router:Router,public _data:TravellerService,public _email:EmailService) { }

  ngOnInit() {
  }
  onSend()
  {
    
    if(this.email=="")
    {
      alert("please enter email address");
    }
    else
    {
      
      this._data.getTravellerByEmail(this.email).subscribe(
        (data:Traveler[])=>{
          if(data.length==1){
            var msg=data[0].traveller_name+" your password is "+data[0].traveller_password;
            console.log(msg);
            this._email.sendMail(new Forget(msg,this.email,"Reseting EMail Password")).subscribe(
              (data:any)=>
              {
                  
                console.log("msg sent");
              });
            alert("Email has been sent to your "+ this.email);
          }
          else{
            alert("please enter correct email address");
          }
        }
      );
      
    }
  }

}
