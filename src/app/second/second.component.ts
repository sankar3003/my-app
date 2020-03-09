import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  ngOnInit(): void {
     new Error("Method not implemented.");
  }
  jsonData=this.http.get('https://jsonplaceholder.typicode.com/todos/1')
@Input() sendvalues;
  constructor(
    public service:HeroService,
    private http:HttpClient
  ) { }


}
