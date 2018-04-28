import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public _subscription:Subscription;
  pass:string="";
  pass1:string="";
  pass2:string="";
  password:string;
  public traveller: Traveler[] = [];
  email:string=localStorage.getItem('Email');
  constructor(public _router:Router,public _data:TravellerService,public ngProgress: NgProgress) { }

  ngOnInit() {

    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.password = this.traveller[0].traveller_password;
      }
    );


  }


  Changepassword(){
    this.ngProgress.start();
    if(this.pass1==this.password)
    {
      if(this.pass==this.pass2)
      {
    let traveler=new Traveler(null,'',this.email,this.pass,'','','');
    this._data.Resetpassword(this.email,traveler).subscribe(
      ()=>{
        this._router.navigate(['/Edittraveller']);
        this.ngProgress.done();
      }
    );
  }
}
  else
  {
    alert("Please enter valid password");
    this.ngProgress.done();
  }
  
}

}
