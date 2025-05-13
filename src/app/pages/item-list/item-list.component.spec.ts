import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ItemFacade } from '../../+state/item.facade';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let spectator: Spectator<ItemListComponent>;
  let facade: ItemFacade;

  const createComponent = createComponentFactory({
    component: ItemListComponent,
    declarations: [
      MockComponent(ItemCardComponent),
      MockComponent(SearchInputComponent),
    ],
    providers: [MockProvider(ItemFacade, { filteredItems: signal([]) })],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
    facade = spectator.inject(ItemFacade);

    jest.spyOn(facade, 'filteredItems').mockReturnValue([
      { id: 1, title: 'Pizza', description: 'Comida', img: '', type: 1 },
      { id: 2, title: 'Flor', description: 'Natureza', img: '', type: 2 },
    ]);
    jest.spyOn(facade, 'search');
    jest.spyOn(facade, 'removeItem');

    spectator.detectChanges();
  });

  it('should render the search input and item cards', () => {
    expect(
      spectator.query('[data-testid="item-list-search-input"]'),
    ).toBeTruthy();

    expect(spectator.queryAll('[data-testid="item-list-card"]').length).toBe(2);
  });

  it('should call facade.search when search is triggered', () => {
    spectator
      .query('app-search-input')
      ?.dispatchEvent(new CustomEvent('searched', { detail: 'pizza' }));

    expect(facade.search).toHaveBeenCalled();
  });

  it('should call facade.removeItem when remove is triggered', () => {
    spectator
      .queryAll('app-item-card')[0]
      ?.dispatchEvent(new CustomEvent('removed'));

    expect(facade.removeItem).toHaveBeenCalled();
  });
});
