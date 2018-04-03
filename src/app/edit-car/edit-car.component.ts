import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Driver } from '../driver/driverc';
import { Traveler } from '../../traveller';
import { DriverService } from '../driver/driver.service';
import { TravellerService } from '../traveller.service';
import {  CarService} from '../car/car.service';
import { car } from '../car/carc';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  selectedFile: File = null;
  public traveller: Traveler[] = [];
  

  email:string=localStorage.getItem('Email');
  public tid: number;
  public _subscription:Subscription;
  id:any;
  name:string="";
  rate:any;
  color:string="";
  category:string="";
  type:string="";
  desc:string="";
img:string="";
avaibility:string;
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:TravellerService,public data:CarService) { }

  ngOnInit() {

console.log(this.avaibility);
    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;

      }
    );

    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["id"];
         
      }
  );
console.log(this.avaibility);

  this.data.getCarBynoId(this.id).subscribe(
    (data:car[])=>{
      console.log(data);
      this.name=data[0].car_name;
      this.color=data[0].car_color;
      this.type=data[0].car_type;
      this.img=data[0].car_img;
      this.rate=data[0].car_rate;
      this.desc=data[0].car_details;
      this.category=data[0].car_category;
      this.avaibility=data[0].car_status;


    }
  );
  


  }

  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];
  
    console.log(value);
  }
  
  getPicture() {
    this.fileInput.nativeElement.click();
  }
  onUpdate(){
  /*  let Car=new car(this.name,this.color,this.type,'',this.rate,this.desc,this.category,this.tid)
    this.data.editCar(this.id,Car).subscribe(
      ()=>{
        this._router.navigate(['/Car']);
      }
    );*/

    if (this.selectedFile == null) {
      let Car=new car(this.name,this.color,this.type,'',this.rate,this.desc,this.category,this.tid,this.avaibility)
      this.data.editCar(this.id, car).subscribe(
        () => {
          this._router.navigate(['/Car']);
        }
      );
    }
    else {
      const fd=new FormData();
      fd.append('car_id',this.id);
      fd.append('car_name',this.name);
      fd.append('car_color',this.color);
      fd.append('car_type',this.type);
      fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('car_rate',this.rate);
      fd.append('car_details',this.desc);
      fd.append('car_category',this.category);
      fd.append('fk_traveller_id',this.tid.toString());
      fd.append('car_status',this.avaibility);
  
      console.log(fd);
  
      this.data.editCarimg(fd).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/Car']);
        }
      );
    }
  }

}
