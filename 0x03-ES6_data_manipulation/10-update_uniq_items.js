export default function updateUniqueItems(map) {
  const newMap = map;
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return newMap.forEach((value, key) => {
    if (value === 1) {
      newMap.set(key, 100);
    }
  });
}
