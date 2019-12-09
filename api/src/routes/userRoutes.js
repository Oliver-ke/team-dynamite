import express from 'express'
import {
    userLogin,
} from '../controller/userController'

const userRoutes = express.Router();


userRoutes.route('/login').post(userLogin);

export default userRoutes;
