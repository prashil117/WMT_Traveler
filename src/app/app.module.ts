import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarComponent } from './car/car.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { routingArray } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CarComponent,
    DriverComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    routingArray
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
