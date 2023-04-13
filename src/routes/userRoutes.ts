import express from 'express';
import { createUser } from '../controllers/user/createUser';
import { getPaginatedUsers } from '../controllers/user/getPaginatedUsers';
import { getUserById } from '../controllers/user/getUserById';

const router = express.Router();

router.post('/', createUser);
router.get('/', getPaginatedUsers);
router.get('/:id', getUserById);

export default router;
