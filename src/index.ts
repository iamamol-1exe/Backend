import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import formatDataParser from './routes/formatDataParser.routes'

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.get('/',(req,res) =>{
    res.send('Hello World!');
});

console.log(process.env.PORT);




app.use('/api/formatdataparser', formatDataParser);


export default app;
