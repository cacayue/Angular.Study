/*
 * @Date: 2020-09-22 10:44:30
 * @LastEditors: Mafutian
 * @LastEditTime: 2020-09-22 10:59:49
 * @FilePath: \Angular.Study\dirty-check\src\app\child.component.ts
 */
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'child-comp',
  template: `<span>I am child component</span>`
})
export class ChildComponent implements OnInit {
    constructor(private parent: AppComponent) {}

    ngOnInit(): void {
        this.parent.text = 'Updated text in parent component';
    }
}
