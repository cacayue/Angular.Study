/*
 * @Date: 2020-09-19 19:07:06
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-19 19:07:18
 * @FilePath: \wyy-yy\src\app\share\play-count.pipe.ts
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
export class PlayCountPipe implements PipeTransform {

  transform(value: number): number | string {
    if (value > 10000){
      return Math.floor(value / 10000) + '万';
    }
    else {
      return value;
    }
  }

}
