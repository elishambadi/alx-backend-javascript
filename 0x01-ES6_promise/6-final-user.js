import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.all(promises)
    .then((results) => {
      return results.map((result) => {
        if (result instanceof Error) {
          return { status: 'rejected', value: result.message };
        }
        return { status: 'fulfilled', value: result };
      });
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
