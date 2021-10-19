import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expr'
})
export class ExprPipe implements PipeTransform {
  currYear: any;
  joinYear: any;
  experience: any;
  transform(value: any): any {
    this.currYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    this.experience = this.currYear - this.joinYear;
    return this.experience;
  }

}
