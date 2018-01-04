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
    EditdriverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routingArray
  ],
  providers: [LoginService,DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
