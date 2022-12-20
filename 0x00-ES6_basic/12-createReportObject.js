export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNombreDeDepartment(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
