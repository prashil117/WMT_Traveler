import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { car } from './carc';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'
import {  TravellerService} from '../traveller.service';
import {Traveler  } from '../../traveller';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car:car[]=[];
  public car1:car[]=[];
  public traveller:Traveler[]=[];
  public tid:number;
  txtsearch:string;
  email:string=localStorage.getItem('Email');
  displayedColumns = ['car_img','car_name', 'car_color','car_type','car_rate','car_category','car_action'];
dataSource: MatTableDataSource<car>;

  constructor(public data:CarService,public _router:Router,public data1:TravellerService) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data:Traveler[])=>{
        this.traveller=data;
        this.tid=this.traveller[0].traveller_id;
     //   this.dataSource = new MatTableDataSource(this.traveller);
        console.log(this.traveller);
      }
    );

    this.data.getCarById(this.email).subscribe(
      (data:any)=>{ 
        this.car=data;
        this.car1=data;
        this.dataSource = new MatTableDataSource(this.car);
        console.log(this.car);
      }
    );
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  onCarDelete(item)
  {
  
    this.data.deleteCar(item.car_id).subscribe(
      (data:any)=>{
        this.car.splice(this.car.indexOf(item),1);
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


}
