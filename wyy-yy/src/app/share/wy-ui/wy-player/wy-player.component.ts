/*
 * @Date: 2020-09-19 19:32:36
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 15:12:09
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-player\wy-player.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wy-player',
  templateUrl: './wy-player.component.html',
  styleUrls: ['./wy-player.component.less']
})
export class WyPlayerComponent implements OnInit {
  sliderValue = 35;
  bufferValue = 75;
  constructor() { }

  ngOnInit(): void {
  }

}
