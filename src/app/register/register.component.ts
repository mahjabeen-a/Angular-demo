import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp: any;
  constructor(private service: EmployeeService) { 
    this.emp = {empId: null, empName: '', gender: '', salary: null, doj: null, loginId: '', password: ''};
  }
  submit(): void{
    alert("Form submitted!");
    console.log(JSON.stringify(this.emp));
  }

  ngOnInit(): void {
    this.service.getCountries();
  }

}
