import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'useLesspipe'
})
export class UseLesspipePipe implements PipeTransform {

  transform(value: string, before: string, after: string,after2:string): string {
    let newStr = `${before} ${value} ${after}  ${after2}`;
    return newStr;
  }

}
