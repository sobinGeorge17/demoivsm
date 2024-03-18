import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  // @viewChild('tasks_parent_area') private tasksParentArea !: ElementRef
  messages:any = []
  intialLoader!:boolean
  taskfilterQuery:any={
    limit:10,
    skip:1
  }
}
