export default function updateUniqueItems(map) {
  const newMap = map;
  return newMap.forEach((value, key) => {
    if (value === 1) {
      newMap.set(key, 100);
    }
  });
}
