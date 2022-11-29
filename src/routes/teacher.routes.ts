import express from 'express'
import { addNewteacher, getAllteacher, getTeacherId } from '../controller/teacher.controller';
import validate from '../middleware/validate';
import { teacherSchema } from '../zod_schema/school.schema';

const router = express.Router();

router.get('/',getAllteacher );
 router.get('/f/:id',validate(teacherSchema),getTeacherId  );
 router.post('/', validate(teacherSchema), addNewteacher)

export default router;