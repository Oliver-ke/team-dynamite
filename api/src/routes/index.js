import express from 'express';
import adminRoutes from './api/adminRoutes';
import userRoutes from './api/userRoutes';

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

export default router;
