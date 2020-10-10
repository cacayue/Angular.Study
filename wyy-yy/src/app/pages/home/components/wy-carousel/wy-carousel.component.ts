/*
 * @Date: 2020-09-19 18:46:42
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 18:57:13
 * @FilePath: \wyy-yy\src\app\pages\home\components\wy-carousel\wy-carousel.component.ts
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {

  @Input() activceIndex = 0  ;
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  @ViewChild('dot', { static: true}) dotRef: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeSlide( type: 'pre' | 'next' ): void{
    this.changeSlide.emit(type);
  }
}
