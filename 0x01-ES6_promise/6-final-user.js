import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resultat = [];
  try {
    const user = await signUpUser(firstName, lastName);
    resultat.push({ status: 'fulfilled', value: user });
  } catch (err) {
    resultat.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  try {
    const upload = await uploadPhoto(fileName);
    resultat.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    resultat.push({
      status: 'rejected',
      value: err.toString(),
    });
  }

  return resultat;
}
