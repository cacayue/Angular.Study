import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  myHero: string;
  canSave: boolean;
  isUnChanged: boolean;
  isSpecial: boolean;
  heros: Hero[];
  parentItem = 'lamp';
  currentItems = [{
    id: 1,
    name: 'haha'
  }];
  currentItem = {
    id: 1,
    name: 'item'
  };
  fontSizePx = 16;
  currentClasses: {};
  currentItemss = 'Tel';
  isActive = true;
  outItems = ['item1', 'item2', 'item3'];
  color: string;
  constructor(){
    this.isUnChanged = false;
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    this.heros = [
      new Hero(1, 'TT'),
      new Hero(2, 'WW'),
      new Hero(3, 'DD'),
    ];
  }
  ngOnInit(): void {
    this.setCurrentClass();
    this.isSpecial = false;
  }
  setCurrentClass(): void{
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnChanged,
      spacial: this.isSpecial,
    };
  }
  setUppercaseName(event): void{
    this.currentItem.name = event.toUpperCase();
  }

  callPhone(phone: string): void{
    console.log(phone);
  }

  addItem(newItem: string): void{
    this.outItems.push(newItem);
    console.log(this.outItems);
  }
}
