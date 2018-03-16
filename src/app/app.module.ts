import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarComponent } from './car/car.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { routingArray } from './app.router';
import { EditCarComponent } from './edit-car/edit-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { EditdriverComponent } from './editdriver/editdriver.component';
import { LoginService } from './login/login.service';
import { DriverService } from "../app/driver/driver.service";
import { CarService } from '../app/car/car.service';
import { TravellerService } from './traveller.service';
import { EmailService } from './forgot/email.service';
import { EdittravellerComponent } from './edittraveller/edittraveller.component';
import { EdittravellerprofileComponent } from './edittravellerprofile/edittravellerprofile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule,MatFormFieldModule,MatButtonModule,MatCardModule,MatTableModule,MatPaginatorModule,MatSortModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CarComponent,
    DriverComponent,
    LoginComponent,
    ForgotComponent,
    EditCarComponent,
    AddCarComponent,
    AdddriverComponent,
    EditdriverComponent,
    EdittravellerComponent,
    EdittravellerprofileComponent,
    ResetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,MatSortModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule,
    routingArray
  ],
  providers: [LoginService,DriverService,CarService,TravellerService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
