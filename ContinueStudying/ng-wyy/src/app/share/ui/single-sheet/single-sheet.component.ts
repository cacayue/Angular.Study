import { SongSheet } from './../../../services/data-types/common.type';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {
  @Input() songSheet: SongSheet;
  @Output() playNow = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  playSheet(id: number): void{
    this.playNow.emit(id);
  }
}
