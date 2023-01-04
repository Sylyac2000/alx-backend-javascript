export default function updateStudentGradeByCity(tablo, city, newGrades) {
  if (!Array.isArray(tablo)) return [];

  const tabloStudent = tablo
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grde) => grde.studentId === student.id);
      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });
  return tabloStudent;
}
