import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises for signUpUser and uploadPhoto
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // Use Promise.allSettled to handle both promises
  const results = await Promise.allSettled(promises);

  // Map the results to the desired structure
  const mappedResults = results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));

  return mappedResults;
}
