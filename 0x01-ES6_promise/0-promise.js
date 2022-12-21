export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve('foo');
      } catch (e) {
        reject(new Error('error'));
      }
    }, 300);
  });
}
