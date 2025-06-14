import express from 'express';
import { formatDataParser1} from '../controllers/formatDataParser.controller';


const router = express.Router();


router.post('/parser1', formatDataParser1);




export default router;
