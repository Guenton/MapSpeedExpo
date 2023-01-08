import { firebaseSignOut } from '../../firebase/auth';

const signOutAsync = async () => {
  try {
    await firebaseSignOut();
  } catch (err) {
    throw err;
  }
};

export default signOutAsync;
