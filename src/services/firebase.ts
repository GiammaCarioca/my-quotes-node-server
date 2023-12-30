import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { grantAdminRole } from '../utils/grantAdminRole.js';

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

const app = initializeApp({
  credential: cert(serviceAccount),
});

const firebaseDB = getFirestore();

const UID = process.env.UID;
console.log('Admin UID: ', UID);

if (UID) {
  await grantAdminRole(UID);
}

export { firebaseDB, app };
