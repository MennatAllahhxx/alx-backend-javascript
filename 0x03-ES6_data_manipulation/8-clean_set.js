export default function cleanSet(set, startString) {
    return [...set].map(value => value.startsWith(startString));
}