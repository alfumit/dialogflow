import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactChatComponent } from './react-chat/react-chat.component';
import { AngularMicrosoftComponent } from './angular-microsoft/angular-microsoft.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReactChatComponent, AngularMicrosoftComponent],
    exports: [ReactChatComponent, AngularMicrosoftComponent]
})
export class ReactChatModule { }
