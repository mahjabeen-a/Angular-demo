import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { ExprPipe } from './expr.pipe';
import { HonorPipe } from './honor.pipe';
import { CodePipe } from './code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    ExprPipe,
    HonorPipe,
    CodePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
