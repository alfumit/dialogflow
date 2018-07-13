import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-react-chat',
  templateUrl: './react-chat.component.html',
  styleUrls: ['./react-chat.component.css']
})
export class ReactChatComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {
    const script = document.createElement('script');
    script.src = 'https://cdn.botframework.com/botframework-webchat/latest/botchat.js';
    document.body.appendChild(script);

  }

  ngAfterViewInit() {
      setTimeout(() => {
          window.BotChat.App({
              directLine: { secret: '' }, //TODO: put the credentials back
              user: { id: '', name: 'you' },
              bot: { id: 'TestSaleBotNode' },
              resize: 'detect'
          }, document.getElementById('bot'));
      }, 5000);

  }

}
