export default function divideFunction(numerator, denominator) {
  if (!denominator) {
    throw Error('cannot divide by 0');
  }

  try {
    return (numerator / denominator);
  } catch (e) {
    return e;
  }
}
