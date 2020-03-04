import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
@Input()  Name: any=name;

time = new Observable<string>(observer => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});

first_name='sanakr'
  constructor(


  ) { }

  ngOnInit() {

  //this.name=this.service.myName
  }

}
