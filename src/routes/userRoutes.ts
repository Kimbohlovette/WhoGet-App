import express from 'express';
import { createUser } from '../controllers/user/createUser';
import { getPaginatedUsers } from '../controllers/user/getPaginatedUsers';
import { getUserById } from '../controllers/user/getUserById';
import { updateUser } from '../controllers/user/updateUser';
import { deleteUser } from '../controllers/user/deleteUser';

const router = express.Router();

router.post('/', createUser);
router.get('/', getPaginatedUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;
