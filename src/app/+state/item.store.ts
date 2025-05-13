import { computed, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  removeEntity,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { catchError, of } from 'rxjs';
import { ItemDto } from '../dtos/item.dto';
import { ItemHttpService } from '../services/item-http.service';
import { fuzzySearch } from '../utils/array.utils';

type BaseState = {
  search: string;
};

export const ItemStore = signalStore(
  { providedIn: 'root' },
  withState<BaseState>({ search: '' }),
  withEntities<ItemDto>(),
  withMethods((store) => ({
    remove(id: number): void {
      patchState(store, removeEntity(id));
    },
    setSearch(search: string): void {
      patchState(store, (state) => ({ ...state, search }));
    },
  })),
  withComputed(({ entities, search }) => ({
    filteredEntities: computed(() => {
      return fuzzySearch(search(), entities(), ['title', 'description']);
    }),
  })),
  withHooks({
    onInit(
      store,
      dataService = inject(ItemHttpService),
      destroyRef = inject(DestroyRef),
    ) {
      dataService
        .getAll()
        .pipe(
          takeUntilDestroyed(destroyRef),
          catchError(() => {
            return of([]);
          }),
        )
        .subscribe((data) => {
          patchState(store, setAllEntities(data));
        });
    },
  }),
);
