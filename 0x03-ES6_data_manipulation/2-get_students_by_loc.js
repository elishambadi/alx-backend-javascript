function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city); // Returns an array holding students
}
