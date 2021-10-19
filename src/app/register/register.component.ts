import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp: any;
  constructor() { 
    this.emp = {empId: null, empName: '', gender: '', salary: null, doj: null, loginId: '', password: ''};
  }
  submit(): void{
    alert("Form submitted!");
    console.log(JSON.stringify(this.emp));
  }

  ngOnInit(): void {
  }

}
