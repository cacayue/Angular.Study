import { WyUiModule } from './wy-ui/wy-ui.module';
/*
 * @Date: 2020-09-19 18:02:18
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:10:03
 * @FilePath: \wyy-yy\src\app\share\share.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { PlayCountPipe } from './play-count.pipe';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzCarouselModule,
    CommonModule,
    WyUiModule
  ],
  exports: [
    FormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzInputModule,
    NzCarouselModule,
    CommonModule,
    WyUiModule,

  ]
})
export class ShareModule { }
