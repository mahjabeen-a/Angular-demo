import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginId: string;
  passwd: string;
  constructor() {
    this.loginId = '';
    this.passwd = ''; 
  }

  ngOnInit(): void {
  }
  loginsubmit(): void{
    if (this.loginId === 'HR' && this.passwd === 'HR'){
      alert('Login success!');
    }
    else{
      alert('Login failure!!');
    }
  }

}
