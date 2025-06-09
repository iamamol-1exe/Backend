import express from 'express';
import data1ToResult from '../controllers/formatdata.controller';

const router = express.Router();


router.get('/data-1', data1ToResult);


export default router;