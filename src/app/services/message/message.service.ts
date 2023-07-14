import { Injectable } from '@angular/core';
import {Message} from "../../models/chat";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
MESSAGE_STORAGE_KEY = 'messages';

  messages: Message[] = [];

  constructor() {
    this.saveMessagesInLocalStorage();
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

  sendMessage(value: string) {
    let message = {
      accountId: 'current account id',
      content: value,
      tag: 'tag',
      time: new Date().toLocaleTimeString()
    }

    this.messages.push(message);

    this.saveMessagesInLocalStorage();

  }
}
