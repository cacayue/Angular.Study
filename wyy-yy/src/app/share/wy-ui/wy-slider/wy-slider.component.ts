import { pluck, map, distinctUntilChanged, takeUntil, mergeAll, max } from 'rxjs/internal/operators';
import { SliderEventObserverConfig, SliderValue } from './wy-slider-style-type';
/*
 * @Date: 2020-09-19 20:29:09
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 15:11:45
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-slider\wy-slider.component.ts
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {  fromEvent, merge, Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { getElementOffset, sliderEvent } from './wy-slider-helper';
import { DOCUMENT } from '@angular/common';
import { inArray } from 'src/app/utils/arrary';
import { getPercent, limitNumberInRange } from 'src/app/utils/number';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-wy-slider',
  templateUrl: './wy-slider.component.html',
  styleUrls: ['./wy-slider.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WySliderComponent),
    multi: true
  }]

})
export class WySliderComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() wyVertical = false;
  @Input() wyMin = 0;
  @Input() wyMax = 100;
  @Input() bufferOffset: SliderValue = 0;
  private sliderDom: HTMLDivElement;
  private isDragging = false;
  offset: SliderValue = null;
  value: SliderValue = null;

  @ViewChild('wySlider', { static: true}) private wySlider: ElementRef;
  private dragStart$: Observable<number>;
  private dragMove$: Observable<number>;
  private dragEnd$: Observable<Event>;
  private dragStart_: Subscription | null;
  private dragMove_: Subscription | null;
  private dragEnd_: Subscription | null;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.sliderDom = this.wySlider.nativeElement;
    this.createDraggingObservables();
    this.subscribeDrag(['start']);
  }

  private createDraggingObservables(): void {
    const orientField = this.wyVertical ? 'pageY' : 'pageX';
    const mouse: SliderEventObserverConfig = {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup',
      filterFunc: (e: MouseEvent) => e instanceof MouseEvent,
      pluckKey: [orientField]
    };

    const touch: SliderEventObserverConfig = {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      filterFunc: (e: TouchEvent) => e instanceof TouchEvent,
      pluckKey: ['touch', '0', orientField]
    };

    [mouse, touch].forEach(source => {
      const { start, move, end, filterFunc, pluckKey } = source;
      source.startPlucked$ = fromEvent(this.sliderDom, start).
        pipe(
          filter(filterFunc),
          tap(sliderEvent),
          pluck(...pluckKey),
          map((position: number) => this.findClosestValue(position))
        );
      source.end$ = fromEvent(this.doc, end);
      source.moveResolved$ = fromEvent(this.doc, move).
        pipe(
          filter(filterFunc),
          tap(sliderEvent),
          pluck(...pluckKey),
          distinctUntilChanged(), // 直到pluckKey发生改变才进行流的发送
          map((position: number) => this.findClosestValue(position)),
          takeUntil(source.end$) // 直到end发出流表示结束
        );
    });

    this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
    this.dragMove$ =  merge(mouse.moveResolved$, touch.moveResolved$);
    this.dragEnd$ = merge(mouse.end$, touch.end$);
  }

  private subscribeDrag(events: string[] = ['start', 'move', 'end']): void{
    if (inArray(events, 'start') && this.dragStart$ && !this.dragStart_) {
      this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
    }
    if (inArray(events, 'move')  && this.dragMove$ && !this.dragMove_) {
      this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
    }
    if (inArray(events, 'end')  && this.dragEnd$ && !this.dragEnd_) {
      this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
    }
  }

  private unsubscribeDrag(events: string[] = ['start', 'move', 'end']): void {
    if (inArray(events, 'start') && this.dragStart_) {
      this.dragStart_.unsubscribe();
      this.dragStart_ = null;
    }
    if (inArray(events, 'move')  && this.dragMove_) {
      this.dragMove_.unsubscribe();
      this.dragMove_ = null;

    }
    if (inArray(events, 'end')  && this.dragEnd_) {
      this.dragEnd_.unsubscribe();
      this.dragEnd_ = null;

    }
  }

  private onDragStart(value: number): void {
    this.toggleDragMoving(true);
    this.setValue(value);
  }
  private onDragMove(value: number): void {
    if (this.isDragging){
      this.setValue(value);
      this.cdr.markForCheck();
    }
  }
  private onDragEnd(value: number): void {
    this.toggleDragMoving(false);
    this.cdr.markForCheck();
  }
  private setValue(value: SliderValue, needCheck = false): void {
    if (needCheck) {
      if (this.isDragging) { return; }
      this.value = this.formatValue(value);
      this.updateTrackAndHandler();
    }
    else if (!this.valueEqual(this.value, value)){
      this.value = value;
      this.updateTrackAndHandler();
      this.onValueChange(this.value);
    }
  }
  private formatValue(value: SliderValue): SliderValue {
    let res = value;
    if (this.assertValueValid(value)){
      res = this.wyMin;
    }else {
      res = limitNumberInRange(value, this.wyMin, this.wyMax);
    }
    return res;
  }
  private assertValueValid(value: SliderValue): boolean {
    return isNaN(typeof value !== 'number' ? parseFloat(value) : value);
  }
  private valueEqual(valA: SliderValue, valB: SliderValue): boolean{
    if ( typeof valA !== typeof valB){
      return false;
    }
    return valA === valB;
  }
  private toggleDragMoving(movable: boolean): void {
    this.isDragging = movable;
    if (movable) {
      this.subscribeDrag(['move', 'end']);
    }else {
      this.unsubscribeDrag(['move', 'end']);
    }
  }

  private updateTrackAndHandler(): void {
    this.offset = this.getValueToOffset(this.value);
    this.cdr.markForCheck();
  }

  private getValueToOffset(value: SliderValue): SliderValue{
    return getPercent(this.wyMin, this.wyMax, value);
  }

  private findClosestValue(position: number): number {
    // 获取滑块总长
    const sliderLength = this.getSliderLength();
    // 获取滑块左/上端点位置
    const sliderStart = this.getSliderStartPosition();
    const ratio = limitNumberInRange((position - sliderStart) / sliderLength, 0, 1) ;
    const ratioTrue = this.wyVertical ?  (1 - ratio) : ratio;
    return ratioTrue * (this.wyMax - this.wyMin) + this.wyMin;
  }

  private getSliderLength(): number {
    return this.wyVertical ? this.sliderDom.clientHeight : this.sliderDom.clientWidth;
  }
  private getSliderStartPosition(): number {
    const offset = getElementOffset(this.sliderDom);
    return this.wyVertical ? offset.top : offset.left;
  }

  private onValueChange(value: SliderValue): void {}
  private onTouched(): void {}
  writeValue(value: SliderValue): void {
    this.setValue(value,true);
  }

  registerOnChange(fn: (val: SliderValue) => void): void {
    this.onValueChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    this.unsubscribeDrag();
  }
}
