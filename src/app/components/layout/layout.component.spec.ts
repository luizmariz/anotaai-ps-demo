import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let spectator: Spectator<LayoutComponent>;
  const createComponent = createComponentFactory({
    component: LayoutComponent,
    declarations: [MockComponent(HeaderComponent)],
    shallow: true,
  });

  it('should render the header and content wrapper', () => {
    spectator = createComponent();
    expect(spectator.query('[data-testid="layout-header"]')).toBeTruthy();
    expect(
      spectator.query('[data-testid="layout-content-wrapper"]'),
    ).toBeTruthy();
  });
});
