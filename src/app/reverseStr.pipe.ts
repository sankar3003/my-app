import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(name: string): string {

    let newStr: string = "";
    for (var i = name.length -1; i >= 0; i--) {
      newStr +=name.charAt(i);

    }
    return newStr;
  }

}
