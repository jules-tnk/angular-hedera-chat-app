import {Component, Input} from '@angular/core';
import {Message} from "../models/chat";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() message: Message = {
    accountId: 'z',
    content: 'zzzzzz',
    tag: 'z',
    time: 'z'
  };

}
