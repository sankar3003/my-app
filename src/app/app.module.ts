import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import {FormsModule} from '@angular/forms'
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http'
import { HeroComponent } from './hero/hero.component';
import { Mode1Component } from './mode1/mode1.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';

import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from './first/exponential-strength.pipe';

import { ReverseStrPipe } from './reverseStr.pipe';
import { UseLesspipePipe } from './useLessPipe.pipe';
import { AlternatePipe } from './alternate.pipe';
import { FilesizePipe } from './filesize.pipe';

import { MultiplierPipe} from './multiplier.pipe'
import { ConfigComponent } from './config/config.component';

import { AppendPipe, filterPipe } from 'src/append.pipe';

@NgModule({
   declarations: [
      AppComponent,
      FirstComponent,
      SecondComponent,
      HeroComponent,
      DashboardComponent,
      MessageComponent,
      HeroDetailComponent,
      Mode1Component,
      AdBannerComponent,
      ExponentialStrengthPipe,
      ReverseStrPipe,
      UseLesspipePipe,
AlternatePipe,
FilesizePipe,
ConfigComponent,
AppendPipe,
filterPipe
   ],
   imports: [
     CommonModule,
     HttpClientModule,
     FormsModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      ),
    ],
   providers: [

   ],
   bootstrap: [
      AppComponent
   ],


   entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
   //exports:[ExponentialStrengthPipe]
})
export class AppModule { }
