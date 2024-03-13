export default function createInt8TypedArray(length, position, value) {
  if (length > position) {
    const x = new ArrayBuffer(length);
    const y = new DataView(x);
    y.setInt8(position, value);
    return y;
  }
  throw new Error('Position outside range');
}
