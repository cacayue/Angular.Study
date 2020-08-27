import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';
MessagesService
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public messagesService: MessagesService
  ) { }

  ngOnInit(): void {
  }

}
