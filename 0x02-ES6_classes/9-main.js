import listOfStudents from './9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription, // eslint-disable-line arrow-parens
);

console.log(listPrinted);
