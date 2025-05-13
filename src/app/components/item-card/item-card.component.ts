import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { metaByItemType } from '../../config/item-type.meta';
import { ItemDto } from '../../dtos/item.dto';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule, TagComponent],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  public readonly item = input.required<ItemDto>();

  public readonly removed = output<void>();

  public readonly metaByItemType = metaByItemType;
}
