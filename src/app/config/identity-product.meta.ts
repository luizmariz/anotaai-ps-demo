import { ItemType } from '../enums/item-type.enum';
import { ItemTypeMetadataMap } from '../models/item-type-metadata.model';

export const metaByItemType: ItemTypeMetadataMap = {
  [ItemType.Landscape]: {
    label: 'Paisagem',
    bgColor: 'hsl(219.05deg 99.21% 50.2%)',
  },
  [ItemType.Flower]: {
    label: 'Flor',
    bgColor: 'hsl(349.12deg 100% 60%)',
  },
  [ItemType.Pizza]: {
    label: 'Pizza',
    bgColor: 'hsl(56.17deg 93.38% 29.61%)',
  },
};
