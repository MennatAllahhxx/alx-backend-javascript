export default function updateUniqueItems(map) {
  const newMap = map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return newMap;
}
