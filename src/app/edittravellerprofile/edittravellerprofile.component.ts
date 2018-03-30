import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { TravellerService } from '../traveller.service';
import { Traveler } from '../../traveller';

@Component({
  selector: 'app-edittravellerprofile',
  templateUrl: './edittravellerprofile.component.html',
  styleUrls: ['./edittravellerprofile.component.css']
})
export class EdittravellerprofileComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  selectedFile: File = null;
  public _subscription:Subscription;
  name1:string="";
  address1:string="";
  city1:string="";
  tid:any; 
  img:string;
  public traveller: Traveler[] = [];
  email:string=localStorage.getItem('Email');
 
  constructor(public _router:Router,public _data:TravellerService) { }

  ngOnInit() {

    this._data.getTravellerByEmail(this.email).subscribe(
      (data: Traveler[]) => {
        this.traveller = data;
        this.name1 = this.traveller[0].traveller_name;
        this.address1 = this.traveller[0].traveller_address;
        this.city1 = this.traveller[0].city;
        this.tid = this.traveller[0].traveller_id;
        this.img=this.traveller[0].traveller_img;
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
/*    let traveler=new Traveler(null,this.name1,this.email,'112',this.address1,'',this.city1);
    this._data.editTraveler(this.tid,traveler).subscribe(
      ()=>{
        this._router.navigate(['/Edittraveller']);
      }
    );*/

    if (this.selectedFile == null) {
      let traveler=new Traveler(null,this.name1,'','',this.address1,this.img,this.city1);
      this._data.editTraveler(this.tid, traveler).subscribe(
        () => {
          this._router.navigate(['/Edittraveller']);
        }
      );
    }
    else {
      const fd=new FormData();
          fd.append('traveller_id',this.tid);
          fd.append('traveller_name',this.name1);
          fd.append('traveller_email',this.email);
          fd.append('traveller_address',this.address1);
          fd.append('city',this.city1);
          fd.append('image',this.selectedFile,this.selectedFile.name);
  
      console.log(fd);
  
      this._data.editTravellerimg(fd).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/Edittraveller']);
        }
      );
  }
}

}