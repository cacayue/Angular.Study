import { DashboradComponent } from './dashborad/dashborad.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  {path: 'heroes',component: HeroesComponent},
  {path: 'dashboard',component: DashboradComponent},
  {path: 'detail/:id',component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch : 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
