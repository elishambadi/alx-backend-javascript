export default function getStudentsByLocation(studentsList, cityName) {
  const students = studentsList.filter((element) => element.location === cityName);
  return students;
}
