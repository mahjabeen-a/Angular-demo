import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './auth.guard';
import { HrPageComponent } from './hr-page/hr-page.component';
const appRoot: Routes = [{path:'', component: LoginComponent},
                        {path:'login', component: LoginComponent}, 
                        {path:'products', canActivate: [AuthGuard], component: ProductComponent}, 
                        {path:'employees', canActivate: [AuthGuard], component: EmployeeComponent},
                        {
                          path: 'hrpage',
                          children: [
                            { path: '', canActivate: [AuthGuard], component: HrPageComponent },
                            { path: 'register', canActivate: [AuthGuard], component: RegisterComponent }
                          ]
                        }];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoot)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
