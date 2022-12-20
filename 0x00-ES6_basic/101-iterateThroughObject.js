export default function iterateThroughObject(reportWithIterator) {
  let stremployees = '';

  for (const [i, value] of reportWithIterator.entries()) {
    if (i !== reportWithIterator.length - 1) {
      stremployees += `${value} | `;
    } else {
      stremployees += value;
    }
  }

  return stremployees;
}
