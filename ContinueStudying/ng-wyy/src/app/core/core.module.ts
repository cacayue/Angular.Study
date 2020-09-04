import { PagesModule } from './../pages/pages.module';
import { ShareModule } from './../share/share.module';
import { ServicesModule } from './../services/services.module';

import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
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
