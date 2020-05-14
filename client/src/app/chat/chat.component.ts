import { Component, OnInit } from '@angular/core';
import { Message, Messages, Topics, User } from './../messageInterface';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html', 
  styleUrls: [ './chat.component.css']
})
export class ChatComponent implements OnInit {
  toggleSidebar: boolean = true;
  topics = Topics;
  topic: number = 0
  username: string = User.name;
  messageTyped : Message = {topic: this.topic, sender: this.username, message: ''}

  constructor(private socket: ChatService) { }


  ngOnInit(): void { 
  }

  getMessages(): Message[] {
    return Messages.filter((m) => m.topic == this.topic)
  }

  sendMessage(){
    if(this.messageTyped.message != ''){
      this.socket.sendMessage(this.messageTyped);
      this.messageTyped.message = '';
    }  
  }

  togglingSidebar(){
    if(this.toggleSidebar) this.toggleSidebar = false;
    else this.toggleSidebar = true;
  }

  changeTopic(t: string){
    this.topic = this.topics.indexOf(t);
    this.messageTyped.topic = this.topic;
  }

  
  


}
