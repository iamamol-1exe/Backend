import express from 'express';
import { formatDataParser1, formatDataParser2,formatDataParser3 } from '../controllers/formatDataParser.controller';


const router = express.Router();


router.get('/parser1', formatDataParser1);
router.get('/parser2', formatDataParser2);
router.get('/parser3',formatDataParser3)


export default router;
