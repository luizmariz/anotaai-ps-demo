import Fuse from 'fuse.js';

export function fuzzySearch<T>(
  needle: string,
  haystack: T[],
  keys: string[],
  threshold = 0.2,
): T[] {
  const fuseOptions = {
    keys,
    threshold,
    includeMatches: false,
    ignoreDiacritics: true,
    shouldSort: false,
  };

  const fuse = new Fuse(haystack, fuseOptions);

  return needle ? fuse.search(needle).map((item) => item.item) : haystack;
}
