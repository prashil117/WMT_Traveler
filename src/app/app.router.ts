import { EditCarComponent } from './edit-car/edit-car.component';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component'
import { ForgotComponent } from './forgot/forgot.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditdriverComponent } from './editdriver/editdriver.component';
import { AdddriverComponent } from './adddriver/adddriver.component';


const routing:Routes = [
    {path: '',redirectTo:'/Login',pathMatch:'full'},
    {path:'Car',component:CarComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'Driver',component:DriverComponent},
    {path:'Login',component:LoginComponent},
    {path:'Forgot',component:ForgotComponent},
    //{path:'car',component:CarComponent},
    {path:'Editcar',component:EditCarComponent},
    {path:'Addcar',component:AddCarComponent},
    {path:'Editdriver/:id',component:EditdriverComponent},
    {path:'Adddriver',component:AdddriverComponent},

]
export const routingArray=RouterModule.forRoot(routing);