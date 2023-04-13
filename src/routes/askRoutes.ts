import express from 'express';
import { getPagenatedAsks } from '../controllers/ask/getPagenatedAsks';
import { createAsk } from '../controllers/ask/createAsk';

const router = express.Router();

router.get('/', getPagenatedAsks);
router.post('/', createAsk);

export default router;
