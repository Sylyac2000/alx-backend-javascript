export default function getStudentsByLocation(tablo, city) {
  if (!Array.isArray(tablo)) return [];

  const tabloStudent = tablo.filter((student) => student.location === city);

  return tabloStudent;
}
