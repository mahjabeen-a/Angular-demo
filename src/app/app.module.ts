import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { ExprPipe } from './expr.pipe';
import { HonorPipe } from './honor.pipe';
import { CodePipe } from './code.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

const appRoot: Routes = [{path:'', component: LoginComponent},
                        {path:'login', component: LoginComponent},
                        {path:'register', component: RegisterComponent}, 
                        {path:'products', component: ProductComponent}, 
                        {path:'employees', component: EmployeeComponent}];
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    ExprPipe,
    HonorPipe,
    CodePipe,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
