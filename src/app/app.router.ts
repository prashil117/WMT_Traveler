import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component'
import { ForgotComponent } from './forgot/forgot.component';
const routing:Routes = [
    {path: '',redirectTo:'/login',pathMatch:'full'},
    {path:'Car',component:CarComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'Driver',component:DriverComponent},
    {path:'Forgot',component:ForgotComponent},
    {path:'car',component:CarComponent}
]
export const routingArray=RouterModule.forRoot(routing);