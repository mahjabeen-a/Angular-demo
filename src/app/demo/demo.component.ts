import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title: string;
  msg: string;
  hobbies: any[];
  person: any;
  constructor() { 
    this.title = 'demo';
    this.msg = '';
    this.hobbies = ['reading novels', 'photography', 'drawing'];
    this.person = {name:'mj', 
    age:20,
    address: {doorNo:'33', city:'Chennai'}}; //objects JSON (nested object)
  }

  ngOnInit(): void {
  }

  showMessage(){
    alert('Welcome to angular method!');
  }

}
