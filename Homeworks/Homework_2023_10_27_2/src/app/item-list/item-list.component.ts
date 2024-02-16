import { Component } from '@angular/core';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items: {name: string, description: string, price: number} [] = [
    {name: 'К. Маркс, Капитал', description: "Капитал К. Маркса", price: 500 },
    {name: 'Ф. Энгельс, Принципы коммунизма', description: "Принципы коммунизма", price: 250 },
    {name: 'В.И. Ленин, Государство и революция', description: "Государство и революция", price: 250 }
  ]
}
