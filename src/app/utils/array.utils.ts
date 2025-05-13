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
    shouldSort: true,
  };

  const fuse = new Fuse(haystack, fuseOptions);

  console.log(fuse.search(needle));

  return needle ? fuse.search(needle).map((item) => item.item) : haystack;
}
