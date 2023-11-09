import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Classwork_2023_11_09_Outputs';
  sum: number = 1;
  onRaiseSum(value: number)
  {
    if(this.sum >= 16000)
    {
      this.sum = 1;
    }
    this.sum *= value;
  }
}