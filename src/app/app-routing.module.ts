import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
 
const appRoot: Routes = [{path:'', component: LoginComponent},
                        {path:'login', component: LoginComponent},
                        {path:'register', component: RegisterComponent}, 
                        {path:'products', component: ProductComponent}, 
                        {path:'employees', component: EmployeeComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoot)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
