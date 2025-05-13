import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { IconComponent } from '../icon/icon.component';
import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let spectator: Spectator<SearchInputComponent>;

  const createComponent = createComponentFactory({
    component: SearchInputComponent,
    declarations: [MockComponent(IconComponent)],
  });

  it('should emit searched when enter is pressed', () => {
    spectator = createComponent();

    jest.spyOn(spectator.component.searched, 'emit');

    spectator.typeInElement('pizza', '[data-testid="search-input"]');

    const input = spectator.query(
      '[data-testid="search-input"]',
    ) as HTMLInputElement;

    expect(input).toBeTruthy();

    spectator.dispatchKeyboardEvent(input, 'keydown', 'Enter');

    expect(spectator.component.searched.emit).toHaveBeenCalledWith('pizza');
  });

  it('should emit searched when button is clicked', () => {
    spectator = createComponent();

    jest.spyOn(spectator.component.searched, 'emit');

    spectator.typeInElement('burger', '[data-testid="search-input"]');
    spectator.click('[data-testid="search-btn"]');

    expect(spectator.component.searched.emit).toHaveBeenCalledWith('burger');
  });
});
