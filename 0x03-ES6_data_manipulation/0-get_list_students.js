export default function getListStudents() {
  const arr = [];
  const student1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  arr.push(student1);
  arr.push(student2);
  arr.push(student3);
  return arr;
}
