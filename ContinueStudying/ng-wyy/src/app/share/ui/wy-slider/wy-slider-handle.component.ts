import { WyStyleType } from './wy-slider-style-type';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderHandleComponent implements OnInit, OnChanges {
  // 是否为垂直方向(默认水平)
  @Input() wyVertical = false;
  @Input() wyOffset: number;
  style: WyStyleType = { };
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['wyOffset']){
      this.style[this.wyVertical ? 'bottom' : 'left'] = this.wyOffset + '%';
    }
  }
}
