export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  // eslint-disable-next-line no-param-reassign
  if (expansion1989 === undefined) expansion1989 = 89;
  // eslint-disable-next-line no-param-reassign
  if (expansion2019 === undefined) expansion2019 = 19;

  return initialNumber + expansion1989 + expansion2019;
}
