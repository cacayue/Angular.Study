import { ShareModule } from './../share/share.module';
/*
 * @Date: 2020-09-19 18:03:52
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 18:36:57
 * @FilePath: \wyy-yy\src\app\pages\pages.module.ts
 */
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule
  ],
  exports: [
    HomeModule
  ]
})
export class PagesModule { }
