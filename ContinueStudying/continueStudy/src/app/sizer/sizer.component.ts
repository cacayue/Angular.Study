import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  dec(): void{ this.resize(-1); }
  inc(): void{ this.resize(+1); }
  resize(delta: number): void{
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
