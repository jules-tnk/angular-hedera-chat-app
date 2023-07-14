import { Injectable } from '@angular/core';
import {Message} from "../../models/chat";
import {AuthService} from "../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  MESSAGE_STORAGE_KEY = 'messages';


  messages: Message[] = [];
  config = {
    operatorAccountId: "0.0.14830215",
    operatorPrivateKey: "3030020100300706052b8104000a042204207ce4ecd4f4103b9dfc507ee3d4b02322fbf0bd2eeb3a9c7fae48aacb6b11e053",
    operatorPublicKey: "302d300706052b8104000a032200023c1f0234921d1884c7cff0fe19737d54a0a1db767bf3505bf39ce3f25a5e1353",
  };

  client: any;

  topicId: string = "";


  constructor(
    private authService: AuthService
  ) {
    this.saveMessagesInLocalStorage();
  }


  parseMessage(message: string) {
    return JSON.parse(message)
  }


  saveMessagesInLocalStorage() {
    localStorage.setItem(this.MESSAGE_STORAGE_KEY, JSON.stringify(this.messages));
  }

  loadMessagesFromLocalStorage() {
    const storedMessages = localStorage.getItem(this.MESSAGE_STORAGE_KEY);
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  }

  getAllMessages() {
    this.loadMessagesFromLocalStorage();
    return this.messages;
  }

  sendMessage(content: string, tag: string) {
    let message = {
      accountId: this.authService.getAccountInfo().accountId,
      content: content,
      tag: tag,
      time: new Date().toLocaleTimeString()
    }

    this.messages.push(message);

    this.saveMessagesInLocalStorage();

  }
}
