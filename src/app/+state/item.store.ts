import { DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import {
  removeEntity,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { catchError, of } from 'rxjs';
import { ItemDto } from '../dtos/item.dto';
import { ItemHttpService } from '../services/item-http.service';

export const FormStore = signalStore(
  { providedIn: 'root' },
  withEntities<ItemDto>(),
  withMethods((store) => ({
    remove(id: number): void {
      patchState(store, removeEntity(id));
    },
  })),
  withHooks({
    onInit(
      store,
      dataService = inject(ItemHttpService),
      destroyRef = inject(DestroyRef)
    ) {
      dataService
        .getAll()
        .pipe(
          takeUntilDestroyed(destroyRef),
          catchError(() => {
            return of([]);
          })
        )
        .subscribe((data) => {
          patchState(store, setAllEntities(data));
        });
    },
  })
);
