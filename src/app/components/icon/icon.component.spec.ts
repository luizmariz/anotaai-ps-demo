import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let spectator: Spectator<IconComponent>;

  const createComponent = createComponentFactory({
    component: IconComponent,
  });

  it('should create', () => {
    spectator = createComponent({
      props: {
        path: '/icon.svg',
      },
    });

    expect(spectator.component).toBeTruthy();
  });
});
