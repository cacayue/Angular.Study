import { PlayCountPipe } from './../play-count.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';



@NgModule({
  declarations: [
    SingleSheetComponent,
    PlayCountPipe
    ],
  imports: [
    CommonModule
  ],
  exports: [
     SingleSheetComponent,
     PlayCountPipe
  ]
})
export class UiModule { }
