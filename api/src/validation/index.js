import { userRegister, userLogin, registerRootAdmin, updateStatus } from './rules';

const getValidator = (validationName) => {
	const rules = {
		userRegister,
		userLogin,
		registerRootAdmin,
		updateStatus,
	};

	return rules[validationName];
};

export default getValidator;
