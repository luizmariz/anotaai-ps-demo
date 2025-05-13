import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ItemFacade } from '../../+state/item.facade';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule, SearchInputComponent, ItemCardComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  public readonly itemFacade = inject(ItemFacade);
}
