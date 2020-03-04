import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{path:'hero', component:HeroComponent},
{path:'first', component:FirstComponent},
{path:'second', component:SecondComponent},
{path:'detail/:id', component:HeroDetailComponent},
{path:'message', component:MessageComponent},
{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
