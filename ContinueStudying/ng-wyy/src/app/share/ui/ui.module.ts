import { WySliderModule } from './wy-slider/wy-slider.module';
import { WyPlayerModule } from './wy-player/wy-player.module';
import { PlayCountPipe } from './../play-count.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';



@NgModule({
  declarations: [
    SingleSheetComponent,
    PlayCountPipe,
    ],
  imports: [
    CommonModule,
    WyPlayerModule,
  ],
  exports: [
     SingleSheetComponent,
     PlayCountPipe,
     WyPlayerModule,
  ]
})
export class UiModule { }
