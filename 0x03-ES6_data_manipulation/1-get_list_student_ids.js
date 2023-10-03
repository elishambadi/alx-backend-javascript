export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map(student => student.id); // Else return an array holding student IDs
}
