import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-some-button',
  templateUrl: './some-button.component.html',
  styleUrls: ['./some-button.component.scss']
})
export class SomeButtonComponent 
{
  @Input() name: string = "";
  @Input () num: number = 1;
  @Output() btnClickData = new EventEmitter<number>;
  addSomeData(): void
  {
    this.num *= 2;
    this.btnClickData.emit(this.num);
  }
}
