export default function createIteratorObject(report) {
  const tabloEmployee = [];
  /* eslint-disable */
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      tabloEmployee.push(employee);
    }
  }
  /* eslint-enable */

  return tabloEmployee;
}
