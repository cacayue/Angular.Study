/*
 * @Date: 2020-09-22 09:57:02
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-22 10:45:45
 * @FilePath: \Angular.Study\dirty-check\src\app\app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
