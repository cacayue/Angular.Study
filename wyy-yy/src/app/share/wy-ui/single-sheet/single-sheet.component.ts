import { ChangeDetectionStrategy } from '@angular/core';
/*
 * @Date: 2020-09-19 19:02:05
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:49:20
 * @FilePath: \wyy-yy\src\app\share\wy-ui\single-sheet\single-sheet.component.ts
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SongSheet } from 'src/app/services/data-types/common.type';

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
