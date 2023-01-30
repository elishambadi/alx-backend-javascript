export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);

    const dataview = new DataView(buffer, 0, 10);
    dataview.setInt8(position, value);
    return dataview;
  } catch (err) {
    console.log('Position outside range');
  }
  return 0;
}
