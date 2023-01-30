function incrementQuantity(value, key, map) {
  if (value === 1) {
    map.set(key, 100);
  }
}

export default function updateUniqueItems(map) {
  map.forEach(incrementQuantity);
}
