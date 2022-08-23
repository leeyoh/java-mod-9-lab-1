import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationHistoryComponentComponent } from './components/conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './components/conversation-thread-component/conversation-thread-component.component';
import { ConversationControlComponentComponent } from './components/conversation-control-component/conversation-control-component.component';
import { ContactListComponentComponent } from './components/contact-list-component/contact-list-component.component';
import { SendMessageComponentComponent } from './components/send-message-component/send-message-component.component';
import { SenderMessageComponentComponent } from './components/sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './components/user-message-component/user-message-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';

import { LoggingService } from './services/logging.service';
import { MessagingDataService } from './services/messaging-data.service';
import { MessageCountComponentComponent } from './components/message-count-component/message-count-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ConversationControlComponentComponent,
    ContactListComponentComponent,
    SendMessageComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    ContactComponentComponent,
    MessageCountComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService,MessagingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
