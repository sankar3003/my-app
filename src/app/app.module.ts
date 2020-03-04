import { BrowserModule } from '@angular/platform-browser';
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
@NgModule({
   declarations: [
      AppComponent,
      FirstComponent,
      SecondComponent,
      HeroComponent,
      DashboardComponent,
      MessageComponent,
      HeroDetailComponent,

   ],
   imports: [
     HttpClientModule,
     FormsModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
