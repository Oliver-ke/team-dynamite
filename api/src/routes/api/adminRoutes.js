import express from 'express';
import { registerUser, changeUserStatus, registerRootAdmin } from '../../controller/adminController';
import { verifyRootAdmin, verifyAdmin, verifyRequestToken } from '../../middlewares/Authentication';
import validate from '../../middlewares/validate';

const adminRoutes = express.Router();

adminRoutes.route('/user').post(validate('userRegister'), verifyRequestToken, verifyAdmin, registerUser);

adminRoutes.route('/user/root').post(validate('registerRootAdmin'), verifyRootAdmin, registerRootAdmin);

adminRoutes.route('/user/status/:id').put(validate('updateStatus'), verifyRequestToken, verifyAdmin, changeUserStatus);

export default adminRoutes;
