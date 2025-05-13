import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { ItemFacade } from './item.facade';
import { ItemStore } from './item.store';

describe('ItemFacade', () => {
  let spectator: SpectatorService<ItemFacade>;
  let storeMock: any;

  const createService = createServiceFactory({
    service: ItemFacade,
    providers: [
      MockProvider(ItemStore, {
        remove: jest.fn(),
        setSearch: jest.fn(),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
    storeMock = spectator.inject(ItemStore) as unknown as typeof ItemStore;
  });

  it('should delegate removeItem to the store', () => {
    spectator.service.removeItem(1);
    expect(storeMock.remove).toHaveBeenCalledWith(1);
  });

  it('should delegate search to the store', () => {
    spectator.service.search('pizza');
    expect(storeMock.setSearch).toHaveBeenCalledWith('pizza');
  });
});
