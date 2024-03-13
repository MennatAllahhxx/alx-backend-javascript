export default function cleanSet(set, startString) {
  return [...set].filter((value) => value.startsWith(startString, 0)).map((value) => value.slice(startString.length)).join('-');
}
