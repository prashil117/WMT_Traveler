import { Component, OnInit } from '@angular/core';
import { DriverService } from './driver.service';
import { Driver } from "./driverc";
import { Router } from '@angular/router';
import {Traveler  } from '../../traveller';
import {  TravellerService} from '../traveller.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  public drivers:Driver[]=[];
  public drivers1:Driver[]=[];
  email:string=localStorage.getItem('Email');
  public traveller:Traveler[]=[];
  public tid:number;
  public delarr:Driver[]=[];
  constructor(public data1:DriverService,public _router:Router,public data:TravellerService) { }

  ngOnInit() {

    this.data.getTravellerByEmail(this.email).subscribe(
      (data:Traveler[])=>{
        this.traveller=data;
        this.tid=this.traveller[0].traveller_id;
        
      }
    );
    
    this.data1.getDriversByEmail(this.email).subscribe(
      (data:any)=>{
        this.drivers=data;
      }
    );
  }

  onDriverDelete(item)
  {
  
    this.data1.deleteDriver(item.driver_id).subscribe(
      (data:any)=>{
        this.drivers.splice(this.drivers.indexOf(item),1);
      }
    );
  }

  editTraveller(item){
    
     this._router.navigate(['/Editdriver',item.driver_id]);
   }

   i:number=0;
   
     checkChange(item:Driver)
       {
         
           if(this.delarr.find(x=>x==item))
           {
             this.delarr.splice(this.delarr.indexOf(item),1);
           }
           else
           {
             this.delarr.push(item);
           }
           console.log(this.delarr);
         
       }

       deleteAll()
       {
         
         if(confirm("Are you sure you want to delete"))
         {
           
           this.data1.deleteAllDrivers(this.delarr).subscribe(
             (data:any)=>{
               for(this.i=0;this.i<this.delarr.length;this.i++)
               {
                 this.drivers.splice(this.drivers.indexOf(this.delarr[this.i]),1);
                 console.log("DONE");
               }
               this.drivers1=[];
             },
             function(err)
             {
               console.log(err);
             },
             function()
             {
             });
         }
       }

}
