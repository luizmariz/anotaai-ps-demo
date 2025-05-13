import { Route } from '@angular/router';
import { ItemListComponent } from './pages/item-list/item-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ItemListComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
