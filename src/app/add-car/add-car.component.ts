import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CarService } from '../car/car.service';
import { car } from '../car/carc';
import { Router } from '@angular/router';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  name: string = "";
  desc: string = "";
  rate: number;
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
  email: string = localStorage.getItem('Email');


  constructor(public data: CarService, public _router: Router, public data1: TravellerService,public changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.data1.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.tid = this.traveller[0].traveller_id;

      }
    );
  }
  fileChange(input){
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
  }
  onAdd() {

   
    this.data.addCar(new car(this.name, this.color, this.type,this.car_img, this.rate, this.desc, this.category,this.tid)).subscribe(
      (data: car[]) => {
        console.log(data);
        console.log(this.type);
        console.log(this.category);
        this._router.navigate(['/Car']);
      },
      function (err) {
        alert(err);
      },
      function () {

      }
    );
  }
  

}
