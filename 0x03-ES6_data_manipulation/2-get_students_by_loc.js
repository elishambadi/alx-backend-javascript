export default function getStudentsByLocation(studentsList, cityName) {
  const students = [];
  studentsList.forEach((element) => {
    if (element.location === cityName) {
      students.push(element);
    }
  });
  return students;
}
