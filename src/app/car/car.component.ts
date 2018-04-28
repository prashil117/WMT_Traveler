import { Component, OnInit,ViewChild } from '@angular/core';
import { CarService } from './car.service';
import { car } from './carc';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'
import {  TravellerService} from '../traveller.service';
import {Traveler  } from '../../traveller';
import { NgProgress } from 'ngx-progressbar';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @ViewChild(MatPaginator)paginator:MatPaginator;
  public car:car[]=[];
  public car1:car[]=[];
  public traveller:Traveler[]=[];
  public delarr:car[]=[];
  public tid:number;
  txtsearch:string;
  email:string=localStorage.getItem('Email');
  displayedColumns = ['check','car_img','car_name', 'car_color','car_rate','car_category','car_status','car_action'];
dataSource: MatTableDataSource<car>;

  constructor(public data:CarService,public _router:Router,public data1:TravellerService,public ngProgress: NgProgress) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data:Traveler[])=>{
        this.traveller=data;
        this.tid=this.traveller[0].traveller_id;
        console.log("car"+this.tid);
     //   this.dataSource = new MatTableDataSource(this.traveller);
        console.log(this.traveller);
      }
    );

    this.data.getCarById(this.email).subscribe(
      (data:any)=>{ 
        this.car=data;
        this.car1=data;
        this.dataSource = new MatTableDataSource(this.car);
        this.dataSource.paginator=this.paginator;
        console.log(this.car);
      }
    );
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  onNavigate()
  {
    this._router.navigate(['/Addcar']);
  }

  onCarDelete(item)
  {
    this.ngProgress.start();
    this.data.deleteCar(item.car_id).subscribe(
      (data:any)=>{
        this.car.splice(this.car.indexOf(item),1);
        this.ngProgress.done();
      }
    );
  }

  editCar(item){
    
     this._router.navigate(['/Editcar',item.car_id]);
   }

   onSearch(item)
   {

     if(item!='')
     {
       this.car=this.car1.filter((x)=>x.car_name.indexOf(item)!==-1);
       
     }
     else
     {
       this.car=this.car1;
       
     }
   }

   i:number=0;
   
     checkChange(item:car)
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
         this.ngProgress.start();
         this.data.deleteAllCar(this.delarr).subscribe(
           (data:any)=>{
             for(this.i=0;this.i<this.delarr.length;this.i++)
             {
               this.car.splice(this.car.indexOf(this.delarr[this.i]),1);
               console.log("DONE");
               this.ngProgress.done();
             }
             this.car1=[];
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
