import { inject, Injectable } from '@angular/core';
import { FormStore } from './item.store';

@Injectable({ providedIn: 'root' })
export class FormFacade {
  public readonly formStore = inject(FormStore);
  public readonly allItems = this.formStore.entities;

  public removeItem(id: number): void {
    this.formStore.remove(id);
  }
}
