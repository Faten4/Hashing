import express from 'express'
import {  adminHandler, getAllUserHandller, loginHandler, registerHandler,  userHandler } from '../controller/auth.controller';
import {authorize, protect} from '../middleware/protect';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';

const router = express.Router();

router.post('/login',validate(loginSchema) ,loginHandler)
router.post('/register',validate(registerSchema), registerHandler)
router.get('/users',protect,getAllUserHandller)
router.get('/admin', protect, authorize('ADMIN'), adminHandler);
router.get('/user', protect, authorize('USER', 'ADMIN'), userHandler);
router.get('/superuser', protect, authorize('ADMIN'), adminHandler);



export default router;