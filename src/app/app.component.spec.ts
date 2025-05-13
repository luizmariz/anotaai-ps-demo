import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(LayoutComponent)],
    shallow: true,
  });

  it('should render the layout and router outlet', () => {
    spectator = createComponent();
    expect(spectator.query('app-layout')).toBeTruthy();
    expect(spectator.query('router-outlet')).toBeTruthy();
  });
});
