import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();
  return Promise
    .all([photoPromise, userPromise])
    .then((theData) => {
      console.log(`${theData[0].body} ${theData[1].firstName} ${theData[1].lastName}`);
    }).catch(() => console.log('Signup system offline'));
}
