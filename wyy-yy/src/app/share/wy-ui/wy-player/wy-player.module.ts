import { FormsModule } from '@angular/forms';
import { WySliderModule } from './../wy-slider/wy-slider.module';
/*
 * @Date: 2020-09-19 19:32:08
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 11:05:50
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-player\wy-player.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WyPlayerComponent } from './wy-player.component';



@NgModule({
  declarations: [WyPlayerComponent],
  imports: [
    CommonModule,
    FormsModule,
    WySliderModule
  ],
  exports: [
    WyPlayerComponent
  ]
})
export class WyPlayerModule { }
