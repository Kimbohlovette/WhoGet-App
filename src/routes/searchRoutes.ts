import express from 'express';
import { search } from '../controllers/searchAndFilters/search';


const router = express.Router();

router.get('/', search);

export default router;