import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: string;
  email: string;
  password: string;
  employees: any[];

  constructor(private router: Router, private authguard: AuthGuard) {
    this.email = '';
    this.loginId = '';
    this.password = ''; 
    this.employees = [ {id: 1, name: "Teresa", gender: 'F', salary: 1000000, DOJ: "01-10-2021", loginId: "teresa", password: "lisbon1"}, 
                      {id: 2, name: "Patrick", gender: 'M', salary: 1500000, DOJ: "02-10-2021", loginId: "patrick", password: "jane2"},
                      {id: 3, name: "Grace", gender: 'F', salary: 600000, DOJ: "03-10-2021", loginId: "grace", password: "pelt3"},
                      {id: 4, name: "Cho", gender: 'M', salary: 800000, DOJ: "04-10-2021", loginId: "cho", password: "cho4"},
                      {id: 5, name: "Wayne", gender: 'M', salary: 700000, DOJ: "05-10-2021", loginId: "wayne", password: "rig5"}
                    ];
  }

  ngOnInit(): void {
  }
  loginSubmit(): void {
    if (this.loginId === 'HR' && this.password === 'HR')
      alert('Login successful');
    else {
      this.employees.forEach((employee: any) => {
        if ((this.loginId === employee.loginId) && (this.password === employee.password)) {
          alert('Welcome to employee page....');
        }
      });
    }
  }

  loginSubmit2(loginForm: any) {
    console.log(loginForm);
    if (loginForm.loginId === 'HR' && loginForm.password === 'HR') {
      // alert('Login successful');
      this.router.navigate(['hrpage']);
      this.authguard.setLoggedIn();
    }
    else {
      this.employees.forEach((employee: any) => {
        if ((loginForm.loginId === employee.loginId) && (loginForm.password === employee.password)) {
          alert('Welcome to employee page....');
          this.authguard.setLoggedIn();
        }
      });
    }
  }

}
