import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'honor'
})
export class HonorPipe implements PipeTransform {

  transform(value: any, gender: any): any {
    if (gender === 'M'){
      return 'Mr. ' + value;
    }
    else{
      return 'Ms. ' + value;
    }
  }

}
