import express from 'express';
import { createUser } from '../controllers/user/createUser';
import { getPaginatedUsers } from '../controllers/user/getPaginatedUsers';
import { getUserById } from '../controllers/user/getUserById';
import { updateUser } from '../controllers/user/updateUser';
import { deleteUser } from '../controllers/user/deleteUser';
import { getAsksByUserId } from '../controllers/user/getAsksByUserId';
import { getUserByEmail } from '../controllers/user/getUserByEmail';
import { updateUserStatus } from '../controllers/user/updateUserStatus';
import { verifyAuthToken } from '../middlewares/auth';
import { getAllUsers } from '../controllers/user/getAllUsers';

const router = express.Router();

router.post('/', createUser);
router.get('/', getPaginatedUsers);
router.get('/all',verifyAuthToken, getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);
router.patch('/:id/status', verifyAuthToken, updateUserStatus);
router.get('/:id/asks', getAsksByUserId);
router.get('/email/:email', getUserByEmail);

export default router;
