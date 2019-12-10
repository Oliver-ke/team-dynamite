import admin from 'firebase-admin';
import dontEnv from 'dotenv';
import jsonFile from 'jsonfile';
import keys from './keys';

dontEnv.config();
const file = `${__dirname}/../../keys.json`;
console.log(file);

let db;
jsonFile
	.writeFile(file, keys, { flag: 'a' })
	.then(() => {
		admin.initializeApp({
			credential: admin.credential.cert(require('./keys.json')),
		});
		db = admin.firestore();
	})
	.catch((error) => console.log(error));

export default db;
