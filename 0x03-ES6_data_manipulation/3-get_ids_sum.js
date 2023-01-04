export default function getStudentIdsSum(tablo) {
  if (!Array.isArray(tablo)) return [];
  const initialValueOfAccumulator = 0;

  const sumOfId = tablo.reduce(
    (accumulator, currentStudent) => currentStudent.id + accumulator,
    initialValueOfAccumulator,
  );

  return sumOfId;
}
