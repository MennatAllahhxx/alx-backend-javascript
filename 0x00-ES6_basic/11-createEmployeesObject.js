export default function createEmployeesObject(departmentName, employees) {
  const info = {};
  info[departmentName] = employees;

  return info;
}
