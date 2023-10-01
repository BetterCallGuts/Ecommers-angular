import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input({required: true}) status?:any;
  @Input({required: true}) masseg?:any;
  
  @Output() closed  = new EventEmitter<boolean>;


  onclickclosed(){
    this.closed.emit(false)
  }
}
