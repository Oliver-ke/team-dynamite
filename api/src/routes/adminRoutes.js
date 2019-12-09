import express from 'express'
import {
    registerUser,
    deactivateUser
} from '../controller/adminController'

const adminRoutes = express.Router();


adminRoutes.route('/new/user').post(registerUser);
adminRoutes.route('/deactivate/user').post(deactivateUser);


export default adminRoutes;