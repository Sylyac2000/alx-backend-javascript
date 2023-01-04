export default function hasValuesFromArray(aset, tablo) {
  return tablo.every((value) => aset.has(value));
}
