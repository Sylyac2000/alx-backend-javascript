export default function concatArrays(array1, array2, string) {
  const all = [...array1, ...array2, ...string];

  return all;
}
