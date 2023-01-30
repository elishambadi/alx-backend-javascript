export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(list) {
      console.log(`Here it is ${list}`);
      return 0;
    },
  };
}
