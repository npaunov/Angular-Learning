import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  currentSize = 20;

  @Output() fontSize = new EventEmitter<number>();
  @Output() textColor = new EventEmitter();
  @Output() backGroundColor = new EventEmitter();

  increaseFontSize(){
    if(this.currentSize < 50) {
      this.currentSize +=5;
      this.fontSize.emit(this.currentSize);
    }
  }

  decreaseFontSize(){
    if(this.currentSize > 10){
      this.currentSize -=5;
      this.fontSize.emit(this.currentSize);
    }
  }

  changeTextColor (event){
    this.textColor.emit(event);
  }

  changeBackgroundColor (event){
    this.backGroundColor.emit(event);
  }
}
