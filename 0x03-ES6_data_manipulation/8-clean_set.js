export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return [...set].filter((value) => value.startsWith(startString, 0)).map((value) => value.slice(startString.length)).join('-');
}
