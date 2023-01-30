import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentList) {
  const ids = getListStudentIds(studentList);
  const initial = 0;
  return ids.reduce((acc, current) => acc + current, initial);
}
