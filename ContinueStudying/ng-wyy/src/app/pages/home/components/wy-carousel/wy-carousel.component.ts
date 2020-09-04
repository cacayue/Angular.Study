import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

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
