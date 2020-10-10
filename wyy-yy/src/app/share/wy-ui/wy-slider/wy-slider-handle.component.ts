/*
 * @Date: 2020-09-19 20:40:29
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-20 09:16:41
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-slider\wy-slider-handle.component.ts
 */
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderHandleComponent implements OnInit, OnChanges {
  @Input() wyVertical = false;
  @Input() wyOffest: number;
  style = {};
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wyOffest){
      this.style[this.wyVertical ? 'bottom' : 'left'] = this.wyOffest + '%';
    }
  }

}
