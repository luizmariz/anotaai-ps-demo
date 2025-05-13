import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { ItemDto } from '../../dtos/item.dto';
import { ItemType } from '../../enums/item-type.enum';
import { IconComponent } from '../icon/icon.component';
import { TagComponent } from '../tag/tag.component';
import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let spectator: Spectator<ItemCardComponent>;
  const createComponent = createComponentFactory({
    component: ItemCardComponent,
    declarations: [MockComponent(TagComponent), MockComponent(IconComponent)],
  });

  const item: ItemDto = {
    id: 1,
    title: 'Test Item',
    description: 'Item description',
    img: '/img.png',
    type: ItemType.Pizza,
  };

  it('should display item data correctly', () => {
    spectator = createComponent({ props: { item } });
    expect(spectator.query('[data-testid="item-card-title"]')).toHaveText(
      'Test Item',
    );
    expect(spectator.query('[data-testid="item-card-description"]')).toHaveText(
      'Item description',
    );
    expect(
      spectator.query('[data-testid="item-card-thumbnail-img"]'),
    ).toHaveAttribute('src', '/img.png');
  });

  it('should emit removed event when close button is clicked', () => {
    spectator = createComponent({ props: { item } });
    jest.spyOn(spectator.component.removed, 'emit');
    spectator.click('[data-testid="item-card-close-btn"]');
    expect(spectator.component.removed.emit).toHaveBeenCalled();
  });
});
