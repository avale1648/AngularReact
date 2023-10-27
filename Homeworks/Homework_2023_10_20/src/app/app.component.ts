import { Component } from '@angular/core';
class Item
{
  name: string;
  price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number)
  {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework_2023_10_20';
  total: number = 0;
  name: string = "";
  price: number = 0;
  quantity: number = 0;
  items: Item[] = [new Item("Молоко",100,1)];
  addToBag(name: string, price: number, quantity: number)
  {
    console.log(new Item(name, price, quantity));
    this.items.push();
    this.total = this.total + (this.items[this.items.length - 1].price * this.items[this.items.length - 1].quantity);
  }
}
