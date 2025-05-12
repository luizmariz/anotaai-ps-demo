import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormFacade } from './+state/item.facade';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  facade = inject(FormFacade);
  title = 'frontend';
}
