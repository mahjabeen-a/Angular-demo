import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[];

  constructor() {
    this.employees = [ {id: 1, name: "Teresa", gender: 'F', salary: 1000000, DOJ: "01-10-2017", mobile: 1234567890, country: "USA", loginId: "teresa", password: "lisbon1"}, 
                      {id: 2, name: "Patrick", gender: 'M', salary: 1500000, DOJ: "02-10-2018", mobile: 1234567890, country: "UK", loginId: "patrick", password: "jane2"},
                      {id: 3, name: "Grace", gender: 'F', salary: 600000, DOJ: "03-10-2020",  mobile: 1234567890, country: "IND", loginId: "grace", password: "pelt3"},
                      {id: 4, name: "Cho", gender: 'M', salary: 800000, DOJ: "04-10-2019",  mobile: 1234567890, country: "CHN", loginId: "cho", password: "cho4"},
                      {id: 5, name: "Wayne", gender: 'M', salary: 700000, DOJ: new Date(),  mobile: 1234567890, country: "ESP", loginId: "wayne", password: "rig5"}
                    ];
  }
  
  ngOnInit(): void {
  }

}
