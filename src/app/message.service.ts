import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, of } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  socket: SocketIOClient.Socket;

  send(message: string) {
    console.debug('Sending', message);
    this.socket.emit('chat message', message);
  }
  
  getPreviousMessages(): Observable<string[]>{
    return Observable.create(observer => {
      this.socket.on('news', ({ messages }) => {
        observer.next(messages);
      });
    })
  }
  
  getNewMessage(): Observable<string> {
    return Observable.create(observer => {
      this.socket.on('chat message', message => {
        observer.next(message);
      });
    })
  }

  constructor() {
    console.log('environment.apiUrl', environment.apiUrl);
    this.socket = io(environment.apiUrl);
  }

}
