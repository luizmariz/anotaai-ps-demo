import { ItemType } from '../enums/item-type.enum';

export interface ItemTypeMetadata {
  label: string;
  bgColor?: string;
}

export type ItemTypeMetadataMap = {
  [key in ItemType | number]?: ItemTypeMetadata;
};
