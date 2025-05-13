import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  public readonly label = input<string>();
  public readonly bgColor = input<string>();
}
