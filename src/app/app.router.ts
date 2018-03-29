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
import { EdittravellerComponent } from './edittraveller/edittraveller.component';
import { EdittravellerprofileComponent } from './edittravellerprofile/edittravellerprofile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OrderComponent } from './order/order.component';
import { EditorderComponent } from './editorder/editorder.component';


const routing:Routes = [
    {path: '',redirectTo:'/Login',pathMatch:'full'},
    {path:'Car',component:CarComponent},
    {path:'Dashboard',component:DashboardComponent},
    {path:'Driver',component:DriverComponent},
    {path:'Login',component:LoginComponent},
    {path:'Forgot',component:ForgotComponent},
    //{path:'car',component:CarComponent},
    {path:'Editcar/:id',component:EditCarComponent},
    {path:'Addcar',component:AddCarComponent},
    {path:'Editdriver/:id',component:EditdriverComponent},
    {path:'Adddriver',component:AdddriverComponent},
    {path:'Edittraveller',component:EdittravellerComponent},
    {path:'Edittravellerprofile',component:EdittravellerprofileComponent},
    {path:'Resetpassword',component:ResetpasswordComponent},
    {path:'Order',component:OrderComponent},
    {path:'Editorder/:id',component:EditorderComponent},
]
export const routingArray=RouterModule.forRoot(routing);