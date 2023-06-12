import express from 'express';
import { getPagenatedAsks } from '../controllers/ask/getPagenatedAsks';
import { createAsk } from '../controllers/ask/createAsk';
import { getAskById } from '../controllers/ask/getAskById';
import { deleteAsk } from '../controllers/ask/deleteAsk';
import { updateAsk } from '../controllers/ask/updateAsk';
import { filterAsks } from '../controllers/searchAndFilters/filterAsks';
import { updateAskStatus } from '../controllers/ask/updateAskStatus';
import { verifyAuthToken } from '../middlewares/auth';
import { getAllAsks } from '../controllers/ask/getAllAsks';

const router = express.Router();

router.get('/', getPagenatedAsks);
router.get('/all', verifyAuthToken, getAllAsks);
router.get('/filter', filterAsks);
router.get('/:id', getAskById);
router.post('/', createAsk);
router.patch('/:id', updateAsk);
router.patch('/:id/status', verifyAuthToken, updateAskStatus);
router.delete('/:id', deleteAsk);

export default router;
