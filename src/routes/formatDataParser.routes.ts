import express from 'express';
import { formatDataParser1} from '../controllers/formatDataParser.controller';

import {authenticate} from "../middlewares/formatDataPraser.middleware"

const router = express.Router();


router.post('/parser1', authenticate,formatDataParser1);




export default router;
