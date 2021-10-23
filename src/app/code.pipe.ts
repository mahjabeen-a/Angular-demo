import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {
  transform(value: any, country: string): any {
    const codes = {IND: '+91', USA: '+1', CHN: '+86', ESP: '+34', UK: '+44'};
    for (const [cont, code] of Object.entries(codes)) {
      if (cont === country) {
        return code + ' ' + value;
      }
    }
    return value;
  }

}
