import { HttpClient } from '@angular/common/http';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ItemDto } from '../dtos/item.dto';
import { ItemHttpService } from './item-http.service';

describe('ItemHttpService', () => {
  let spectator: SpectatorService<ItemHttpService>;

  const createService = createServiceFactory({
    service: ItemHttpService,
    providers: [MockProvider(HttpClient)],
  });

  it('should call the correct endpoint when fetching all items', () => {
    spectator = createService();

    const http = spectator.inject(HttpClient);
    const items: ItemDto[] = [];

    jest.spyOn(http, 'get').mockReturnValue(of(items));

    spectator.service.getAll().subscribe((result) => {
      expect(result).toBe(items);
    });

    expect(http.get).toHaveBeenCalledWith(
      expect.stringMatching(environment.apiUrl),
    );
  });
});
