import express from 'express';
import { formatDataParser1, formatDataParser2 } from '../controllers/formatDataParser.controller';


const router = express.Router();


router.get('/parser1', formatDataParser1);
router.get('/parser2', formatDataParser2);


export default router;
