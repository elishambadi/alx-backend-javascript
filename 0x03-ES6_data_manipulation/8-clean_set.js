export default function cleanSet(set, startString) {
  if (startString.length !== 0) {
    let str = '';
    set.forEach((x) => {
      if (String(x).startsWith(startString)) {
        str += `${x.slice(startString.length)}-`;
      }
    });
    return str.slice(0, str.length - 1);
  }
}
