export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.values(report.allEmployees);

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        
        if (currentEmployeeIndex < currentDepartment.length) {
          const employee = currentDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: employee, done: false };
        } else {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
  };
}
