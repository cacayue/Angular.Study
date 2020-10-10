/*
 * @Date: 2020-09-19 17:16:24
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 16:28:08
 * @FilePath: \wyy-yy\src\app\app.module.ts
 */
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
