export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map(student => {
        const newGrade = newGrades.find(grade => grade.studentId === student.id);
        return {
          id: student.id,
          name: student.firstName,
          city: student.location,
          grade: newGrade ? newGrade.grade : 'N/A'
        };
      });
  }
  return [];
}