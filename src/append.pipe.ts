import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'append',
  pure:false
})
export class AppendPipe implements PipeTransform {

  transform(value: any, append): any {
    console.log(value)
    return value + append
  }



}


@Pipe({
  name: 'filter',

})
export class filterPipe implements PipeTransform {

  transform(value: any, field,filterValue): any {

   if(value && value.length>0){
    return value.filter(x=>x[field]==filterValue)
   }
   else{
     return [];
   }
  }



}
