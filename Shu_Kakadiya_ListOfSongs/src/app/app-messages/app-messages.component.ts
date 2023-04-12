import { Component } from '@angular/core';
// @ts-ignore
import { MessagesService } from '../message.service';
import {MessageService} from "../message.sevice";

@Component({
  selector: 'app-app-messages',
  templateUrl: 'app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent {
  msgService: any;
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
