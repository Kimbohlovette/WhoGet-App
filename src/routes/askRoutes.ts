import express from 'express';
import { getAllAsks } from '../controllers/ask/getAllAsks';

const router = express.Router();

router.get('/', getAllAsks);

export default router;