import express from "express";
import { formatDataParser1 } from "../controllers/formatDataParser.controller";


const router = express.Router();

router.post("/parse", formatDataParser1);

export default router;
