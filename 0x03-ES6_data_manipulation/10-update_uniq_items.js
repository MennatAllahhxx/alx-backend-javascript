export default function updateUniqueItems(map) {
    const newMap = map.forEach((key, value) => {
        if (value === 1) {
            newMap.set(key, 10);
        }
    });
    return newMap;
}