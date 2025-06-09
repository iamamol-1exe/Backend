import express from 'express';
import { data1ToResult, data2ToResult } from '../controllers/formatdata.controller';

const router = express.Router();


router.get('/data-1', data1ToResult);
router.get('/data-2', data2ToResult);


export default router;