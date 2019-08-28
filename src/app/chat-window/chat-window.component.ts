import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  messages = [];
  newMessage: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getPreviousMessages().subscribe(messages => this.messages = messages);

    this.messageService.getNewMessage().subscribe(message => {
      this.messages.push(message);
    });
  }

  send() {
    this.messageService.send(this.newMessage);
  }
}
