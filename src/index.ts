import express from 'express';
import dotenv from 'dotenv';
import formatDataRoutes from './routes/formatdata.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.get('/',(req,res) =>{
    res.send('Hello World!');
});

app.use('/api/formatdata', formatDataRoutes);






export default app;
