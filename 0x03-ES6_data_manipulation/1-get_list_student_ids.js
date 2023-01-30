export default function getListStudentIds(students) {
  const ids = [];
  let i = 0;
  //   console.log(typeof(students));
  if (typeof (students) === 'object') {
    while (i < students.length) {
      ids.push(students[i].id);
      i += 1;
    }
  }
  return ids;
}
