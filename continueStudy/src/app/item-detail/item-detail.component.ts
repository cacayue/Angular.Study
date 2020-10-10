import { Item } from './../item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() childItem: string;
  @Output() deleteRequest = new EventEmitter<Item>();
  item: Item = {
    id: 1,
    name: 'detail'
  };
  @Input() itemss: string;
  imgUrl = 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1-66368c33f8.png';
  displayNone = '';
  lineThrough = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.childItem);
  }

  delete(): void{
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none' ;
    this.lineThrough = this.lineThrough ? '' : 'line-through' ;

  }

}
