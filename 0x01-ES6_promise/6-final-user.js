import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([[uploadPhoto(fileName), signUpUser(firstName, lastName)]])
    .then((resultat) => {
      const tablo = [];
      resultat.forEach((elt) => {
        if (elt.status === 'fulfilled') {
          tablo.push({
            status: elt.status,
            value: elt.value,
          });
        } else {
          tablo.push({
            status: elt.status,
            value: `Error: ${elt.reason.message}`,
          });
        }
      });
      return tablo;
    });
}
