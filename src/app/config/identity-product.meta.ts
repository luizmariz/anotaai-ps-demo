import { ItemType } from '../enums/item-type.enum';
import { ItemTypeMetadataMap } from '../models/item-type-metadata.model';

export const metaByItemType: ItemTypeMetadataMap = {
  [ItemType.Landscape]: {
    label: 'Paisagem',
  },
  [ItemType.Flower]: {
    label: 'Flor',
  },
  [ItemType.Pizza]: {
    label: 'Pizza',
  },
};
