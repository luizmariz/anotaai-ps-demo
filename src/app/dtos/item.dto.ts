import { ItemType } from '../enums/item-type.enum';

export interface ItemDto {
  id: number;
  title: string;
  description: string;
  img: string;
  type: ItemType;
}
