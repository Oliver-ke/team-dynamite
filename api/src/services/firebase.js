import admin from 'firebase-admin';
import keys from './serverCert.json';

let db;

admin.initializeApp({
	credential: admin.credential.cert(keys),
});
db = admin.firestore();
export default db;
