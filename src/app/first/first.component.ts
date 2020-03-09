import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseService } from '../ad-banner/response.service';
import { CommentStmt } from '@angular/compiler';
import { Config } from '../Config';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-first',
  templateUrl:'./first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
file1:any;
fname:any
url:string='assets/rose.jpg';

text:any='';

num1:bigint;
name1=[1,2,3,4]

  power = 5;
  factor = 1;

user={
  name:'Gowri Sankar'
}

users:any[]=[
  {name:'Gowri sankar',gender:'male'},
  {name:'Raju',gender:'male'},
  {name:'pavithra',gender:'Female'},


]



  birthday =  Date.now(); // April 15, 1988
  toggle = true; // start with true == shortDate
  num: any;
  values: any=[];
  datas: any=[]
  config: Config;

constructor(
private http:HttpClient,
  private service:ConfigService
){

}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

get format(){
  return this.toggle?'fullDate':'longDate'
}
toggleFormat(){
  return this.toggle=!this.toggle;
}

  @Input('msg') name: string;
  ngOnInit() {
this.getVal();
  }

getVal(){
this.service.getConfig().subscribe(res=>{
  console.log(res);
  this.values=res;
})
}



adduser(val){
  this.users=[...this.users,{'name':val,'gender':'male'}];

}

}
