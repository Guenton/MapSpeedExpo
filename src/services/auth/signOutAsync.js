import { firebaseSignOut } from '../../firebase/auth';
import clearStoredCredentialsAsync from './clearStoredCredentialsAsync';

const signOutAsync = async () => {
  try {
    await clearStoredCredentialsAsync();
    await firebaseSignOut();
  } catch (err) {
    throw err;
  }
};

export default signOutAsync;
