/*
 * @Date: 2020-09-19 20:28:14
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 20:44:32
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-slider\wy-slider.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WySliderComponent } from './wy-slider.component';
import { WySliderHandleComponent } from './wy-slider-handle.component';
import { WySliderTrackComponent } from './wy-slider-track.component';



@NgModule({
  declarations: [WySliderComponent,
    WySliderTrackComponent,
    WySliderHandleComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    WySliderComponent
  ]
})
export class WySliderModule { }
