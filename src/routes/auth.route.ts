import express from 'express'
import { admin, getAllUserHandller, loginHandler, registerHandler, user } from '../controller/auth.controller';
import {authorized, protect} from '../middleware/protect';
import validate from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';

const router = express.Router();

router.post('/login',validate(loginSchema) ,loginHandler)
router.post('/register',validate(registerSchema), registerHandler)
router.get('/users',protect,getAllUserHandller)
router.get('/admin',protect,authorized, admin);
router.get('/user',protect,authorized, user);



export default router;