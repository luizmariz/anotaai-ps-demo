import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public readonly title = 'Teste de Desenvolvedor Front-End - Anota AI';
  public readonly subtitle = 'Luiz Mariz';
  public readonly logoSrc = '/images/logo-128x128.png';
}
