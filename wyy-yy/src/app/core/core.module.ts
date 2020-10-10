import { ShareModule } from './../share/share.module';
import { PagesModule } from './../pages/pages.module';
import { ServicesModule } from './../services/services.module';
/*
 * @Date: 2020-09-19 17:44:29
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 16:09:45
 * @FilePath: \wyy-yy\src\app\core\core.module.ts
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppStoreModule } from '../store';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppStoreModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  // 只能被appmodule引用,@SkipSelf()跳过自己的检查, @Optional() 为空时赋值为null
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule){
      throw new Error('CoreModule只能被AppModule引用');
    }
  }
 }
