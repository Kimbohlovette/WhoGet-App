import express from 'express';
import { getPagenatedAsks } from '../controllers/ask/getPagenatedAsks';
import { createAsk } from '../controllers/ask/createAsk';
import { getAskById } from '../controllers/ask/getAskById';
import { deleteAsk } from '../controllers/ask/deleteAsk';
import { updateAsk } from '../controllers/ask/updateAsk';
import { filterAsks } from '../controllers/searchAndFilters/filterAsks';
import { updateAskStatus } from '../controllers/ask/updateAskStatus';

const router = express.Router();

router.get('/', getPagenatedAsks);
router.get('/filter', filterAsks);
router.get('/:id', getAskById);
router.post('/', createAsk);
router.patch('/:id', updateAsk);
router.patch('/:id/status', updateAskStatus);
router.delete('/:id', deleteAsk);

export default router;
