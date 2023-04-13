import express from 'express';
import { getPagenatedAsks } from '../controllers/ask/getPagenatedAsks';
import { createAsk } from '../controllers/ask/createAsk';
import { getAskById } from '../controllers/ask/getAskById';

const router = express.Router();

router.get('/', getPagenatedAsks);
router.get('/:id', getAskById);
router.post('/', createAsk);

export default router;
