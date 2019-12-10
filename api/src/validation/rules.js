import { body } from 'express-validator';

const nameRegex = /^[A-Za-z\-']{2,250}$/;

export const userRegister = [
	body('firstName')
		.matches(nameRegex)
		.trim()
		.withMessage('firstName should be an alphabet between 2 and 250 characters'),
	body('lastName').matches(nameRegex).trim().withMessage('lastName should be an alphabet between 2 and 250 characters'),
	body('password', 'password should be at least 6 characters').isLength({ min: 6 }),
	body('houseNumber').not().isEmpty().isNumeric().withMessage('Provide a numeric houseNumber').trim(),
	body('houseAddress').not().isEmpty().isString().withMessage('Provide your houseAddress').trim(),
	body('phone').not().isEmpty().isMobilePhone().withMessage('Provide your phone field').trim(),
	body('email', 'Please provide a valid email').trim().isEmail(),
];

export const userLogin = [
	body('email').not().isEmpty().isEmail().withMessage('Provide an email').trim(),
	body('password').not().isEmpty().isString().withMessage('Provide your password'),
];

export const updateStatus = [
	body('active').not().isEmpty().isBoolean().withMessage('Prove active state, true or false'),
];

export const registerRootAdmin = [
	body('firstName')
		.matches(nameRegex)
		.trim()
		.withMessage('firstName should be an alphabet between 2 and 250 characters'),
	body('lastName').matches(nameRegex).trim().withMessage('lastName should be an alphabet between 2 and 250 characters'),
	body('password', 'password should be at least 6 characters').isLength({ min: 6 }),
	body('email', 'Please provide a valid email').trim().isEmail(),
	body('secret', 'Please provide a valid secret key').trim().not().isEmpty(),
];
