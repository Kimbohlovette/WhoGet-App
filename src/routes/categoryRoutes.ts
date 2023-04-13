import express from 'express';
import { getPaginatedCategories } from '../controllers/category/getPaginatedCategories';
import { getAsksByCategory } from '../controllers/category/getAsksByCategory';
import { createCategory } from '../controllers/category/createCategory';
import { deleteCategory } from '../controllers/category/deleteCategory';

const router = express.Router();

router.get('/', getPaginatedCategories);
router.get('/:id/asks', getAsksByCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

export default router;
