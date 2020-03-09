import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdDirective } from '../ad.directive';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'ad-banner',
  template:`
  <div class="ad-banner-example">
              <h3>Advertisements</h3>
              <ng-template ad-host></ng-template>
            </div>`,
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit ,OnDestroy{

  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  ngOnDestroy() {
    clearInterval(this.interval);
  }





}
