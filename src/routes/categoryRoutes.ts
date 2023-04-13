import express from 'express';
import { getPaginatedCategories } from '../controllers/category/getPaginatedCategories';
import { getAskById } from '../controllers/ask/getAskById';
import { getAsksByCategory } from '../controllers/category/getAsksByCategory';

const router = express.Router();

router.get('/', getPaginatedCategories);
router.get('/:id/asks', getAsksByCategory);

export default router;
