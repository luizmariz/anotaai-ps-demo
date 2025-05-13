import { removeDiacritics } from './string.utils';

export function fuzzySearch<T>(
  needle: string,
  haystack: T[],
  keys: string[],
): T[] {
  return haystack.filter((item) =>
    keys.some((key: string) =>
      removeDiacritics((item as { [key: string]: string })[key])
        .toLowerCase()
        .includes(removeDiacritics(needle).toLowerCase()),
    ),
  );
}
