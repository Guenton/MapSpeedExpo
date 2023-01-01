import { db } from './app';
import { ref, onValue, get } from 'firebase/database';

// Document Paths
const paths = () => ({
  vehicles: 'vehicles/',
});

// Refferences
const refs = () => ({});
