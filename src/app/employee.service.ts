import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }
  getCountries(){
    this.httpClient.get('https://restcountries.com/v3.1/all').subscribe((result: any)=>console.log(result))
  }
}
