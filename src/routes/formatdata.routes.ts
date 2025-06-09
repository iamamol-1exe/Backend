import express from 'express';
import { data1ToResult, data2ToResult,data3ToResult } from '../controllers/formatdata.controller';

const router = express.Router();


router.get('/data-1', data1ToResult);
router.get('/data-2', data2ToResult);
router.get('/data-3', data3ToResult);



export default router;