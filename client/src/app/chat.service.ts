import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { Message, Messages } from './messageInterface';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket: SocketIOClient.Socket
  
  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('chat', (data: Message) => {
      Messages.push(data)
    } )
  }

  sendMessage(message : Message){
    this.socket.emit('chat', message)
  }
}
