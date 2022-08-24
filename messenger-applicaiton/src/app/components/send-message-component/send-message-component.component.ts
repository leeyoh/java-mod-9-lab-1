import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-send-message-component',
  templateUrl: './send-message-component.component.html',
  styleUrls: ['./send-message-component.component.css']
})
export class SendMessageComponentComponent implements OnInit {

  messageString: string;

  constructor(private loggingSvce: LoggingService) {} // declare the loggingSvce variable through the component's constructor


  ngOnInit(): void {}
  // use the instance of the logging service in our event handler
  onSendMessage() {
    
    this.loggingSvce.log("Send following message: ");
    this.loggingSvce.log(this.messageString);
  }
}
