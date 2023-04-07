import { Component } from '@angular/core';
// @ts-ignore
import { MessagesService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {}

  ngOnInit() {}
}
