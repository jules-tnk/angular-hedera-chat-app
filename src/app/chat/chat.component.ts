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
  newMessageTag = {
    value: "normal",
    class: "btn btn-primary"
  };

  tags = [
    {value: "normal", class: "btn btn-primary"},
    {value: "warning", class: "btn btn-warning"},
    {value: "danger", class: "btn btn-danger"}
  ];

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.messages = this.messageService.getAllMessages();
  }

  sendMessage() {
    if (this.newMessageInput === "") {
      alert("Please enter a message");
      return;
    }
    this.messageService.sendMessage(this.newMessageInput, this.newMessageTag.value);
    this.newMessageInput = "";
  }


  updateTag(newTag: any) {
    this.newMessageTag = newTag;
  }
}
