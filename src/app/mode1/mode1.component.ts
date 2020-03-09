import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mode1',
  template: `
   <h1>Alert {{type}}</h1>
  `,
  styleUrls: ['./mode1.component.scss']
})
export class Mode1Component implements OnInit {
  @Input() type: string = "success";
  constructor() { }

  ngOnInit(): void {
  }

}
