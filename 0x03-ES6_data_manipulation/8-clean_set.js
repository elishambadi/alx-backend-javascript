export default function cleanSet(set, startString) {
  const filteredSet = new Set([...set].filter(item => item.startsWith(startString)));
  return [...filteredSet].join('-');
}
