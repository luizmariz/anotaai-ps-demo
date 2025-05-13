import { inject, Injectable } from '@angular/core';
import { ItemStore } from './item.store';

@Injectable({ providedIn: 'root' })
export class ItemFacade {
  public readonly itemStore = inject(ItemStore);
  public readonly allItems = this.itemStore.entities;
  public readonly filteredItems = this.itemStore.filteredEntities;

  public removeItem(id: number): void {
    this.itemStore.remove(id);
  }

  public search(search: string): void {
    this.itemStore.setSearch(search.trim());
  }
}
