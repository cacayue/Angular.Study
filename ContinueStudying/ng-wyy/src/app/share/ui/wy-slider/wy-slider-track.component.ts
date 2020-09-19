import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { WyStyleType } from './wy-slider-style-type';

@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderTrackComponent implements OnInit, OnChanges {
  // 是否为垂直方向(默认水平)
  @Input() wyVertical = false;
  @Input() wyLength: number;
  style: WyStyleType = { };
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wyLength']){
      if (this.wyVertical){
        this.style.height = this.wyLength + '%';
        this.style.left = null;
        this.style.bottom = null;
      } else {
        this.style.left = this.wyLength + '%';
        this.style.height = null;
        this.style.bottom = null;
      }
    }
  }

}
