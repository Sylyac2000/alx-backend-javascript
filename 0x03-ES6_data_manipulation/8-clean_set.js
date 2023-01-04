export default function cleanSet(set, startString) {
  const tablo = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      tablo.push(s.slice(startString.length));
    }
  });
  return tablo.join('-');
}
