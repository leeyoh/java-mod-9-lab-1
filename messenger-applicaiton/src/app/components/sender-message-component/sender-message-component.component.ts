import { Component, OnInit, Input } from '@angular/core';
import {Message} from './../../models/message.model';
@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css']
})
export class SenderMessageComponentComponent implements OnInit {
  @Input() message !: Message;
  
  constructor() { }

  ngOnInit(): void {
  }

}
