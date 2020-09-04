import { UiModule } from './ui/ui.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
    UiModule
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
    UiModule,
  ]
})
export class ShareModule { }
