import { Component, OnInit } from "@angular/core";
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

  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.userMessages = this.messagingSvce.getUserMessages();
    this.messagingSvce.userMessagesChanged().subscribe((messages: Message[]) => {
      console.log("********** messages have changed");
      this.userMessages = messages;
    });
  }
}