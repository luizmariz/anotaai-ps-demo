import { inject, Injectable } from '@angular/core';
import { ItemStore } from './item.store';

@Injectable({ providedIn: 'root' })
export class ItemFacade {
  public readonly itemStore = inject(ItemStore);
  public readonly allItems = this.itemStore.entities;

  public removeItem(id: number): void {
    this.itemStore.remove(id);
  }
}
