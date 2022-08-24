import { Component, OnInit, SimpleChange } from "@angular/core";
import { Message } from "./../../models/message.model";
import { MessagingDataService } from "./../../services/messaging-data.service";

@Component({
  selector: "app-conversation-thread-component",
  templateUrl: "./conversation-thread-component.component.html",
  styleUrls: ["./conversation-thread-component.component.css"],
})
export class ConversationThreadComponentComponent implements OnInit {
  senderMessages: Message[];
  userMessages: Message[];

  constructor(private messagingSvce: MessagingDataService) {}

  ngOnChanges(changes: SimpleChange){
    console.log(this.userMessages)
    console.log('helasjdflk;js')
  }

  ngOnInit(): void {
    this.messagingSvce.senderMessagesChanged.subscribe((e) => this.senderMessages = e);
    this.messagingSvce.userMessagesChanged.subscribe((e) => this.userMessages = e);

    this.messagingSvce.getSenderMessages();
    this.messagingSvce.getUserMessages();
  }
}