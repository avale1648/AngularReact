import { Component } from '@angular/core';
enum Colour
  {
    Red,
    Yellow,
    Green
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Classwork_2023_11_10_ComponentLifeCycle';
  name: string = '';
  isRoundCorners: boolean = true;
  isColourful: boolean = true;
  //
  colour: Colour = Colour.Red;
  setRoundCorners(): void 
  {
    this.isRoundCorners = !this.isRoundCorners;
  }
  setColour(): void
  {
    this.isColourful = !this.isColourful;
  }
  setColourNew(colour: number)
  {
    
    this.colour = colour;
  }
}
