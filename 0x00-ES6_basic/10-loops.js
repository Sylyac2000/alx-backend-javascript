export default function appendToEachArrayValue(array, appendString) {
  const allArray = [];
  for (const value of array) {
    allArray.push(appendString + value);
  }

  return allArray;
}
