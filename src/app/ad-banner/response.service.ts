import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../data';



@Injectable({
  providedIn: 'root'
})
export class ResponseService {
url='https://jsonplaceholder.typicode.com/posts'


private url1:any ="assets/data/config.json";



constructor(
public http:HttpClient
) { }


getData():Observable<Data[]>{
return this.http.get<Data[]>(this.url1);
}


}
