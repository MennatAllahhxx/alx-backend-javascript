export default function cleanSet(set, startString) {
  if ((startString.length === 0) || (typeof startString !== 'string')) {
    return '';
  }
  return [...set].filter((value) => value.startsWith(startString, 0)).map((value) => value.slice(startString.length)).join('-');
}
