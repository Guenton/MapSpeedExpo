import loginBiometricAsync from './loginBiometricAsync';
import hasBiometricsAsync from './hasBiometricsAsync';
import storeEmailAndPasswordAsync from './storeEmailAndPasswordAsync';
import getStoredEmailAsync from './getStoredEmailAsync';

const authService = {
  loginBiometricAsync,
  hasBiometricsAsync,
  storeEmailAndPasswordAsync,
  getStoredEmailAsync,
};

export default authService;
