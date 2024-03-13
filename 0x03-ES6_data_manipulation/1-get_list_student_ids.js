export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const newArr = arr.map(({ id }) => id);

    return newArr;
  }
  return [];
}
