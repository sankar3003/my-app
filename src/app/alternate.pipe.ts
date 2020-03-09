import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternate'
})
export class AlternatePipe implements PipeTransform {

  transform(value: string, t): string {
    let image = "";
    if (value) {
      image = value;
    } else {
      image = t;
    }
     return image;
  }
}
