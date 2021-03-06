import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CarService } from '../car/car.service';
import { car } from '../car/carc';
import { Router } from '@angular/router';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  name: string = "";
  desc: string = "";
  rate: string="";
  color: string = "";
  type: string = "";
  category: string = "";
  car_img:string="";
  public file_srcs:string[]=[];
  public debug_size_before:string[]=[];
  public debug_size_after:string[]=[];
  public car: car[] = [];
  public traveller: Traveler[] = [];
  public tid: number;
  avaibility:string;
  email: string = localStorage.getItem('Email');
  selectedFile:File=null;

  constructor(public data: CarService, public _router: Router, public data1: TravellerService,public changeDetectorRef:ChangeDetectorRef,public ngProgress: NgProgress) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;

      }
    );
  }
/*  fileChange(input){
    console.log("done");
    this.readFiles(input.files);

  }
  readFile(file, reader, callback){
    reader.onload = () => {
      callback(reader.result);
      this.car_img=reader.result;
      console.log(reader.result);
    }
  
    reader.readAsDataURL(file);
  }
  readFiles(files, index=0){
    // Create the file reader
    let reader = new FileReader();
    
    // If there is a file
    if(index in files){
      // Start reading this file
      this.readFile(files[index], reader, (result) =>{
        // Create an img element and add the image file data to it
        var img = document.createElement("img");
        img.src = result;
    
        // Send this img to the resize function (and wait for callback)
        this.resize(img, 250, 250, (resized_jpeg, before, after)=>{
          // For debugging (size in bytes before and after)
          this.debug_size_before.push(before);
          this.debug_size_after.push(after);
    
          // Add the resized jpeg img source to a list for preview
          // This is also the file you want to upload. (either as a
          // base64 string or img.src = resized_jpeg if you prefer a file). 
          this.file_srcs.push(resized_jpeg);
    
          // Read the next file;
          this.readFiles(files, index+1);
        });
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
    // This will wait until the img is loaded before calling this function
    return img.onload = () => {
  
      // Get the images current width and height
      var width = img.width;
      var height = img.height;
  
      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
          if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
          }
      } else {
          if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
          }
      }
  
      // create a canvas object
      var canvas = document.createElement("canvas");
  
      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");  
  
      ctx.drawImage(img, 0, 0,  width, height); 
  
      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg');
  
      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }*/

  onFileSelected(value){
    this.selectedFile=<File>value.target.files[0];
    
    console.log(value);
      }


  onAdd(addform) {

   this.ngProgress.start();
    this.name=addform.value.car_name;
    this.desc=addform.value.car_details;
    this.rate=addform.value.car_rate;
    this.color=addform.value.car_color;

 //   let item=new User(this.email_id,this.password,this.user_name,this.address,this.bod,this.gender,this.user_photo,this.mobile);
 const fd=new FormData();
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


    this.data.addCar((fd)).subscribe(
      (data: car[]) => {
        console.log(data);
        console.log(this.type);
        console.log(this.category);
        console.log(this.avaibility);
        this._router.navigate(['/Car']);
        this.ngProgress.done();
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }
  

}
