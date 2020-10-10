import { Observable } from 'rxjs';
/*
 * @Date: 2020-09-20 09:15:12
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 09:53:06
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-slider\wy-slider-style-type.ts
 */
export type WyStyleType = {
  height?: string | null;
  width?: string | null;
  left?: string | null;
  bottom?: string | null;
};

export type SliderEventObserverConfig = {
  start: string;
  move: string;
  end: string;
  filterFunc: (e: Event) => boolean;
  pluckKey: string[];
  startPlucked$?: Observable<number>;
  moveResolved$?: Observable<number>;
  end$?: Observable<Event>;
};

export type SliderValue = number | null;
