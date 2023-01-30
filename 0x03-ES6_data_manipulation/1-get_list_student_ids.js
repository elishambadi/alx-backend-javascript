export default function getListStudentIds(students) {
  let ids = [];
  let i = 0;
//   console.log(typeof(students));
  if (typeof(students) == 'object') {
    while (i < students.length) {
        ids.push(students[i].id);
        i++;
    }
  }
  return ids;
}