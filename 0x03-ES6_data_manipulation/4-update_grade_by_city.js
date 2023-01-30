export default function updateStudentGradebyCity(studentList, cityName, newGrades) {
  return studentList.filter((x) => x.location === cityName)
    .map((element) => {
      const student = element;
      const gradeObj = newGrades.find((element) => element.studentId === student.id);

      if (gradeObj) {
        student.grade = gradeObj.grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });
}
