import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';



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
