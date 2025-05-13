import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host: { '[style.-webkit-mask-image]': 'path()' },
})
export class IconComponent {
  public readonly path = input.required({
    transform: (value) => `url("${value}")`,
  });
}
