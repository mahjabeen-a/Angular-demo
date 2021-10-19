import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: string;
  passwd: string;
  employees: any[];

  constructor() {
    this.loginId = '';
    this.passwd = ''; 
    this.employees = [ {id: 1, name: "Teresa", gender: 'F', salary: 1000000, DOJ: "01-10-2021", loginId: "teresa", password: "lisbon1"}, 
                      {id: 2, name: "Patrick", gender: 'M', salary: 1500000, DOJ: "02-10-2021", loginId: "patrick", password: "jane2"},
                      {id: 3, name: "Grace", gender: 'F', salary: 600000, DOJ: "03-10-2021", loginId: "grace", password: "pelt3"},
                      {id: 4, name: "Cho", gender: 'M', salary: 800000, DOJ: "04-10-2021", loginId: "cho", password: "cho4"},
                      {id: 5, name: "Wayne", gender: 'M', salary: 700000, DOJ: "05-10-2021", loginId: "wayne", password: "rig5"}
                    ];
  }

  ngOnInit(): void {
  }
  loginsubmit(): void{
    if (this.loginId === 'HR' && this.passwd === 'HR'){
      alert('Login success!');
    }
    else{
      this.employees.forEach((employee: any) => {
        if ((this.loginId === employee.loginId) && (this.passwd === employee.password)){
          alert('Welcome to employee page.');
        }
      });
    }
  }

}
