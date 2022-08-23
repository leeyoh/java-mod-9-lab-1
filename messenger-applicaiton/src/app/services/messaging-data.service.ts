import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";
import { Message } from "./../models/message.model";

@Injectable()
export class MessagingDataService {
  private senderMessages: Message[] = [
    {
      sender: { firstName: "Ludovic", isOnline: true },
      text: "Message from Ludovic",
      conversationId: 1,
      sequenceNumber: 0,
    },
    {
      sender: { firstName: "Jessica" },
      text: "Message from Jessica",
      conversationId: 1,
      sequenceNumber: 1,
    },
  ];

  private userMessages: Message[] = [
    {
      sender: { firstName: "Aurelie" },
      text: "Message from Aurelie",
      conversationId: 1,
      sequenceNumber: 2,
    },
  ];

  getSenderMessages() {
    return this.senderMessages.slice();
  }

  getUserMessages() {
    return this.userMessages.slice();
  }

  constructor(private loggingSvce: LoggingService) {
    loggingSvce.log("Messaging Data Service constructor completed");
  }
}