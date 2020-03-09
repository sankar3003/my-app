import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './dialog/dialog.component';
import { Mode1Component } from './mode1/mode1.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{path:'hero', component:HeroComponent},
{path:'first', component:FirstComponent},
{path:'second', component:SecondComponent},
{path:'detail/:id', component:HeroDetailComponent},
{path:'message', component:MessageComponent},
{ path: 'dashboard', component: DashboardComponent },
{path:"mode1",component:Mode1Component},
{path:"ad-banner",component:AdBannerComponent},
{path:"config",component:ConfigComponent}
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      AdDirective,

   ]
})
export class AppRoutingModule { }
