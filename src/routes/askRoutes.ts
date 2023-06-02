import express from 'express';
import { getPagenatedAsks } from '../controllers/ask/getPagenatedAsks';
import { createAsk } from '../controllers/ask/createAsk';
import { getAskById } from '../controllers/ask/getAskById';
import { deleteAsk } from '../controllers/ask/deleteAsk';
import { updateAsk } from '../controllers/ask/updateAsk';
import { filterAsks } from '../controllers/searchAndFilters/filterAsks';

const router = express.Router();

router.get('/', getPagenatedAsks);
router.get('/filter', filterAsks);
router.get('/:id', getAskById);
router.post('/', createAsk);
router.put('/:id', updateAsk);
router.delete('/:id', deleteAsk);

export default router;
