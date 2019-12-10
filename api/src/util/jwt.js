import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secretKey = process.env.SECRET;

export const verifyToken = async (token, secret = secretKey) => {
	const decoded = await jwt.verify(token, secret);
	return decoded;
};

export const generateToken = async (payload, secret = secretKey) => {
	const token = await jwt.sign(payload, secret, { expiresIn: '1d' });
	return token;
};
