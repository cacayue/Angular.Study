/*
 * @Date: 2020-09-19 17:16:24
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 18:40:34
 * @FilePath: \wyy-yy\src\app\app-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
