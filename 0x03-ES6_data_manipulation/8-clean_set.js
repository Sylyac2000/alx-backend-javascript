export default function cleanSet(aset, startString) {
  let result = '';
  aset.forEach((value) => {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  });
  return result.slice(0, -1);
}
