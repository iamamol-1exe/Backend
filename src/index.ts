import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import formatDataRoutes from './routes/formatdata.routes';
import formatDataParser from './routes/formatDataParser.routes'

dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log(process.env.PORT);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.get('/',(req,res) =>{
    res.send('Hello World!');
});


// time consuming method for formating data 
// app.use('/api/formatdata', formatDataRoutes);



app.use('/api/formatdataparser', formatDataParser);






export default app;
