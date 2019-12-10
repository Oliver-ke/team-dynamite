import jsonFile from 'jsonfile';
import dotenv from 'dotenv';

dotenv.config();

export const writeKeys = () => {
	const file = '../services/keys.json';
	const obj = {
		private_key_id: process.env.PRIVATE_KEY_ID,
		private_key: process.env.PRIVATE_KEY,
		client_email: process.env.CLIENT_EMAIL,
		client_id: process.env.CLIENT_ID,
	};
	jsonFile.writeFileSync(file, obj, { flag: 'a' }, (error) => {
		if (error) console.log(error);
	});
};
