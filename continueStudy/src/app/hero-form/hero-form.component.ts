import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  submitMessage = '不能为空';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e): void{
    console.log(e);
    console.log(e.value);
  }
}
