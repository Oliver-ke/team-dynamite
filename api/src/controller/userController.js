import consola from 'consola';
import { getItem } from '../util/firebase';
import { generateToken } from '../util/jwt';
import { comparePassword } from '../util/bcrypt';

const userLogin = async (req, res) => {
	const { email, password } = req.body;
	try {
		//  find user
		const { result: user } = await getItem({ email }, 'users');
		if (!user) {
			return res.status(404).json({ error: 'Auth failed' });
		}
		if (!user.active) {
			return res.status(401).json({ error: 'User account deactivated' });
		}
		const { password: existingPassword } = user;
		const isPassValid = comparePassword(existingPassword, password);
		if (!isPassValid) {
			return res.status(401).json({ error: 'Incorrect password or email' });
		}
		const token = await generateToken(user);
		delete user.password;
		const resData = { token, ...user };
		return res.status(200).json(resData);
	} catch (error) {
		consola.log(error);
		return res.status(500).json({ error: 'Opss server error' });
	}
};

export { userLogin };
