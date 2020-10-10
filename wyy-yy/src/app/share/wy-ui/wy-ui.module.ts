import { WyPlayerModule } from './wy-player/wy-player.module';
/*
 * @Date: 2020-09-19 19:00:56
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 20:44:49
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-ui.module.ts
 */
import { NgModule } from '@angular/core';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { PlayCountPipe } from '../play-count.pipe';



@NgModule({
  declarations: [SingleSheetComponent,
    PlayCountPipe,
    ],
  imports: [
    WyPlayerModule
  ],
  exports: [
    SingleSheetComponent,
    PlayCountPipe,
    WyPlayerModule
  ]
})
export class WyUiModule { }
