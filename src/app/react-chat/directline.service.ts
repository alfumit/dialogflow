import { Injectable } from '@angular/core';
import { DirectLine} from 'botframework-directlinejs';

@Injectable({
  providedIn: 'root'
})
export class DirectlineService {
     readonly botConnection = new DirectLine({secret: '', conversationId: ''});

  constructor() { }
}
