/*
 * @Date: 2020-09-19 18:04:44
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 18:28:47
 * @FilePath: \wyy-yy\src\app\services\services.module.ts
 */
import { NgModule } from '@angular/core';
import { InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: API_CONFIG, useValue:  'http://localhost:3000/'}
  ]
})
export class ServicesModule { }
