export default function hasValuesFromArray(set, array) {
  // Checks every array element against set.has rule
  // Returns if all elements pass the rule
  return array.every((x) => set.has(x));
}
