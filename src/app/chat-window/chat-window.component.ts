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
  shouldScrollToBottom: boolean = false;
  firstLoad: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getPreviousMessages().subscribe(messages => {
      this.messages = messages;
      this.shouldScrollToBottom = true;
    });

    this.messageService.getNewMessage().subscribe(message => {
      this.messages.push(message);
      this.shouldScrollToBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
    });
  }

  send() {
    this.messageService.send(this.newMessage);
    this.newMessage = '';
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      window.scrollTo(0, document.body.scrollHeight);
      this.shouldScrollToBottom = false;
    }
  }

}
