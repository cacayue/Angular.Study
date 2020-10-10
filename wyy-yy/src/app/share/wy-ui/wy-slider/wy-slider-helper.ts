/*
 * @Date: 2020-09-20 09:38:57
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 10:03:49
 * @FilePath: \wyy-yy\src\app\share\wy-ui\wy-slider\wy-slider-helper.ts
 */
export function sliderEvent(e: Event): void {
  // 阻止默认事件, 阻止冒泡事件Ss
  e.stopPropagation();
  e.preventDefault();
}

export function getElementOffset(el: HTMLDivElement): { top: number; left: number} {
  if (el.getBoundingClientRect() === null) {
    return {
      top: 0,
      left: 0
    };
  }
  const rect = el.getBoundingClientRect();
  const win = el.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}
