export default function getListStudentIds(tablo) {
  if (!Array.isArray(tablo)) return [];

  const tabloId = tablo.map((student) => student.id);

  return tabloId;
}
