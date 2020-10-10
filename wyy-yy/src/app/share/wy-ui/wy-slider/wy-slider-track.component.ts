import { WyStyleType, SliderValue } from './wy-slider-style-type';
/*
 * @Date: 2020-09-19 20:39:48
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 15:10:30
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-slider\wy-slider-track.component.ts
 */
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [class.buffer]="wyBuffer" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderTrackComponent implements OnInit, OnChanges  {
  @Input() wyVertical = false;
  @Input() wyLength: number;
  @Input() wyBuffer = false;
  style: WyStyleType = {};
  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wyLength){
      if (this.wyVertical){
        this.style.height = this.wyLength + '%';
        this.style.left = null;
        this.style.bottom = null;
      } else {
        this.style.width = this.wyLength + '%';
        this.style.height = null;
        this.style.bottom = null;
      }
    }
  }
}
