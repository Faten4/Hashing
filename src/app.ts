import express from 'express';
import { connectDB } from './config/db';
import authRouter from './routes/auth.route'
import studentRouter from './routes/student.routes'

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/studennt', studentRouter)
//app.use('/api/v1/classroom', authRouter)
//app.use('/api/v1/teacher', authRouter)







app.listen(5000, () =>{
    console.log('server is running port 5000');
    
})
