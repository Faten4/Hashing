import express from 'express'
import { addNewstudent, getAllstudent, getstudentId } from '../controller/student.controller';
import validate from '../middleware/validate';
import { studentSchema } from '../zod_schema/school.schema';

const router = express.Router();

router.get('/', getAllstudent );
 router.get('/f/:id',validate(studentSchema), getstudentId);
 router.post('/', validate(studentSchema),addNewstudent )

export default router;