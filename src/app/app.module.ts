import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { ReactChatModule } from './react-chat/react-chat.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ChatModule,
        ReactChatModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
