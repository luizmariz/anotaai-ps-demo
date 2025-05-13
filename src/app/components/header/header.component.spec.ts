import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
  });

  it('should display logo, title and subtitle correctly', () => {
    spectator = createComponent({
      props: {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        logoSrc: '/logo.png',
      },
    });

    expect(spectator.query('[data-testid="header-logo"]')).toHaveAttribute(
      'src',
      '/logo.png',
    );
    expect(spectator.query('[data-testid="header-title"]')).toHaveText(
      'Test Title',
    );
    expect(spectator.query('[data-testid="header-subtitle"]')).toHaveText(
      'Test Subtitle',
    );
  });
});
