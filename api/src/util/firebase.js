import firebaseDb from '../services/firebase';

export const addItem = async (data, collectionName) => {
	try {
		const ref = firebaseDb.collection(collectionName).doc(data.id);
		await ref.set(data);
		return { result: true };
	} catch (error) {
		console.log(error);
		return { error: true };
	}
};

export const getItem = async (option, collectionName) => {
	const key = Object.keys(option)[0];
	const value = Object.values(option)[0];
	const item = [];
	try {
		const snp = await firebaseDb.collection(collectionName).where(key, '==', value).get();
		snp.forEach((doc) => {
			item.push(doc.data());
		});
		return { result: item[0] };
	} catch (error) {
		console.log(error);
		return { error: true };
	}
};

export const getItems = async (collectionName) => {
	const items = [];
	try {
		const snp = await firebaseDb.collection(collectionName).get();
		snp.forEach((doc) => {
			items.push(doc.data());
		});
		return { result: items };
	} catch (error) {
		console.log(error);
		return { error: true };
	}
};

export const updateItem = async (id, data, collectionName) => {
	try {
		const ref = firebaseDb.collection(collectionName).doc(id);
		await ref.update(data);
		return { result: true };
	} catch (error) {
		console.log(error);
		return { error: true };
	}
};

// export const getItem = async (id, collectionName) => {
// 	firebaseDb
// 		.collection(collectionName)
// 		.where('id', '==', id)
// 		.get()
// 		.then((snapshot) => {
// 			const item = [];
// 			snapshot.forEach((doc) => {
// 				item.push(doc.data());
// 			});
// 			return { result: item[0] };
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			return { error: true };
// 		});
// };

// export const getItems = async (collectionName) => {
// 	firebaseDb
// 		.collection(collectionName)
// 		.get()
// 		.then((snapshot) => {
// 			const items = [];
// 			snapshot.forEach((doc) => {
// 				items.push(doc.data());
// 			});
// 			return { result: items };
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			return { error: true };
// 		});
// };
