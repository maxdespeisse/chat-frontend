import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  messages = [];
  newMessage: string;
  socket: SocketIOClient.Socket;

  constructor() { }

  ngOnInit() {
    this.socket = io('https://safe-spire-86891.herokuapp.com/');
    this.socket.on('news', ({ messages }) => {
      this.messages = messages;
    });

    this.socket.on('chat message', message => {
      this.messages.push(message);
    });
  }

  send() {
    this.socket.emit('chat message', this.newMessage);
  }
}
