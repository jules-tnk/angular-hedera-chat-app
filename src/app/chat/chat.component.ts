import { Component } from '@angular/core';
import {Message} from "../models/chat";
import {MessageService} from "../services/message/message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  newMessageInput: string = "";

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.messages = this.messageService.getAllMessages();
  }

  sendMessage() {
    if (this.newMessageInput === "") {
      alert("Please enter a message");
    }
    this.messageService.sendMessage(this.newMessageInput);
    this.newMessageInput = "";
  }
}
