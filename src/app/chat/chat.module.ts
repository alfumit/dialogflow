import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule , MatButtonModule, MatInputModule, MatDividerModule } from '@angular/material';

import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatMaterialComponent} from './chat-material/chat-material.component';
import {ChatService} from './chat.service';

import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      NgbModule, MatCardModule, MatButtonModule, MatInputModule, MatDividerModule
    ],
    declarations: [ChatDialogComponent, ChatMaterialComponent],
    exports: [ChatDialogComponent, ChatMaterialComponent],
    providers: [ChatService]
})
export class ChatModule { }
