import { config } from 'dotenv';
import { getItem } from '../util/firebase';
import { verifyToken } from '../util/jwt';
import consola from 'consola';

config();

export const verifyRequestToken = async (req, res, next) => {
	try {
		const { headers: { authorization } } = req;
		if (authorization === undefined) throw new Error('no auth');
		const token = authorization.split(' ')[1];
		if (!token || token === '') {
			return res.status(401).json({ error: 'Access denied' });
		}
		const decoded = await verifyToken(token);
		if (!(decoded && decoded.id)) {
			return res.status(401).json({ error: 'verification failed' });
		}
		req.user = decoded;
		return next();
	} catch (error) {
		if (error.message === 'no auth' || error.message === 'jwt expired') {
			return res.status(401).json({ error: 'Authentication Failed' });
		}
		consola.log(error);
		return res.status(500).json({ error: 'internal server error' });
	}
};

export const verifyAdmin = async (req, res, next) => {
	const { id } = req.user;
	try {
		const { result: user } = await getItem({ id }, 'users');
		if (user && user.role === 'admin') {
			return next();
		}
		return res.status(403).json({ error: 'Not allowed' });
	} catch (error) {
		consola.log(error);
		return res.status(500).json({ error: 'oops server broke' });
	}
};

export const verifyRootAdmin = async (req, res, next) => {
	const { secret } = req.body;
	if (secret && secret === process.env.ROOT_SECRET) {
		return next();
	}
	return res.status(403).json({ error: 'Forbideen' });
};
