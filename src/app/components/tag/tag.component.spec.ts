import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TagComponent } from './tag.component';

describe('TagComponent', () => {
  let spectator: Spectator<TagComponent>;

  const createComponent = createComponentFactory({
    component: TagComponent,
  });

  it('should display the label and apply the background correctly', () => {
    spectator = createComponent({ props: { label: 'Flor', bgColor: '#ff0' } });

    const tag = spectator.query('[data-testid="tag"]');

    expect(tag).toHaveText('Flor');
    expect(tag).toHaveStyle({ backgroundColor: 'rgb(255, 255, 0)' });
  });
});
