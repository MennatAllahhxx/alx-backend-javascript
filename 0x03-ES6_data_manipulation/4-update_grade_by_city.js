export default function updateStudentGradeByCity(students, city, newGrades) {
  const newArr = students.filter((student) => student.location === city).map((student) => {
    const studentInGrades = newGrades.filter(({ studentId }) => studentId === student.id);
    if (studentInGrades.length) {
      // eslint-disable-next-line no-param-reassign
      student.grade = studentInGrades[0].grade;
    } else {
      // eslint-disable-next-line no-param-reassign
      student.grade = 'N/A';
    }
    return student;
  });

  return newArr;
}
