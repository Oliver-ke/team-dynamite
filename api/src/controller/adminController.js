import consola from 'consola';
import uuid from 'uuid/v4';
import { addItem, getItem, updateItem } from '../util/firebase';
import { hashPassword } from '../util/bcrypt';

const registerUser = async (req, res) => {
	const { firstName, lastName, houseNumber, houseAddress, phone, email, password } = req.body;
	try {
		// check if email exist
		const { result } = await getItem({ email }, 'users');
		if (result && result.email === email) {
			return res.status(409).json({ error: 'Email exist' });
		}
		const newUser = {
			id: uuid(),
			firstName,
			lastName,
			houseNumber,
			houseAddress,
			password: hashPassword(password),
			phone,
			email,
			active: true,
			role: 'tenant',
		};
		await addItem(newUser, 'users');
		delete newUser.password;
		return res.status(201).json(newUser);
	} catch (error) {
		consola.log(error);
		return res.status(500).json({ error: 'opps server error' });
	}
};

const registerRootAdmin = async (req, res) => {
	const { firstName, lastName, password, email } = req.body;
	try {
		const { result } = await getItem({ email }, 'users');
		if (result && result.email === email) {
			return res.status(409).json({ error: 'Email exist' });
		}
		const newAdmin = {
			id: uuid(),
			firstName,
			lastName,
			password: hashPassword(password),
			email,
			active: true,
			role: 'admin',
		};
		await addItem(newAdmin, 'users');
		delete newAdmin.password;
		return res.status(201).json(newAdmin);
	} catch (error) {
		consola.log(error);
		return res.status(500).json({ error: 'opps server error' });
	}
};

const changeUserStatus = async (req, res) => {
	const { id } = req.params;
	const { active } = req.body;
	try {
		const { result: user } = await getItem({ id }, 'users');
		if (!user) {
			return res.status(404).json({ error: 'No user with the given id' });
		}
		const { result } = await updateItem(id, { active }, 'users');
		if (result) {
			return res.status(200).json({ success: 'User active state change' });
		}
		return res.status(500).json({ error: 'Error updating user active' });
	} catch (error) {}
};

export { registerUser, changeUserStatus, registerRootAdmin };
