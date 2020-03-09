import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(size: number): string {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }
}
