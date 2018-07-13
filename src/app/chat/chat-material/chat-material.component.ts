import { Component, OnInit } from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-chat-material',
  templateUrl: './chat-material.component.html',
  styleUrls: ['./chat-material.component.css']
})
export class ChatMaterialComponent implements OnInit {
    messages: Observable<Message[]>;
    formValue: string;

  constructor(private chat: ChatService) { }

    ngOnInit() {
        this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val));
    }

    sendMessage() {
        this.chat.converse(this.formValue);
        this.formValue = '';
    }

}
