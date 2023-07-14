import { Injectable } from '@angular/core';
import {Message} from "../../models/chat";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  MESSAGE_STORAGE_KEY = 'messages';

  messages: Message[] = [];

  constructor(
    private authService: AuthService
  ) {
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
