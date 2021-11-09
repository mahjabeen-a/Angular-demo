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
import { HrPageComponent } from './hr-page/hr-page.component';
import { HttpClientModule } from '@angular/common/http';
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
    ProductComponent,
    HrPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
