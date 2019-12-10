import express from 'express';
import { userLogin } from '../../controller/userController';
import validate from '../../middlewares/validate';

const userRoutes = express.Router();

userRoutes.route('/login').post(validate('userLogin'), userLogin);

export default userRoutes;
