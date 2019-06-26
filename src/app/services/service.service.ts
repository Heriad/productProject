import { Injectable } from '@angular/core';
import { Item } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  items: Item[] = [];
  id = 0;
  constructor() { }

  addItem(item: Item): void {
    item.id = this.id++;
    item.date = new Date();
    this.items.push(item);
  }

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number) {
    for (const el of this.items) {
      if (el.id === id) {
        return el;
      }
    }
  }
}
