/*
 * @Date: 2020-09-19 18:34:58
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:27:48
 * @FilePath: \wyy-yy\src\app\pages\home\home-routing.module.ts
 */
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeResolverService } from './homeResolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: '发现' }, resolve: { homeDatas: HomeResolverService } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolverService]
})
export class HomeRoutingModule { }
