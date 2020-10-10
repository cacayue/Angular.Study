/*
 * @Date: 2020-10-02 09:13:17
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-10-02 10:00:59
 * @FilePath: \wyy-yy\src\app\utils\number.ts
 */
export function limitNumberInRange(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

export function getPercent(min: number, max: number, val: number): number {
  return (val - min) / (max - min) * 100;
}
