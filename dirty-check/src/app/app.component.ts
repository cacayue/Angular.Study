/*
 * @Date: 2020-09-22 09:57:02
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-22 10:47:06
 * @FilePath: \Angular.Study\dirty-check\src\app\app.component.ts
 */
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _time: number;
  text = 'Original text in parent component';
  title = 'dirty-check';
  get time() {
    return this._time;
  }
  constructor(zone: NgZone) {
    this._time = Date.now();
    zone.runOutsideAngular(() => {
      setInterval(() => {
          this._time = Date.now();
      }, 1);
    });
  }
}
