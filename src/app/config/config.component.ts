import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../Config';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ResponseService } from '../ad-banner/response.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  headers: string[];
  error: any;
public  employees:any=[]

  constructor(
    private resser:ResponseService
  ) { }

  ngOnInit() {
   this.resser.getData().subscribe(res=>{
      this.employees=res;
      console.log(this.employees);
    })
  }




showConfig() {

}


}
