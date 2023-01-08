import * as LocalAuthentication from 'expo-local-authentication';

const hasBiometricsAsync = async () => {
  try {
    const securityLevel = await LocalAuthentication.getEnrolledLevelAsync();

    if (securityLevel === 'NONE') return false;
    return true;
  } catch (err) {
    throw err;
  }
};

export default hasBiometricsAsync;
