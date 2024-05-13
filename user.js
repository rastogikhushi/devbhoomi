import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController';
const router = express.Router()
import { verifyAdmin, verifyUser } from '../utils/verifyToken';
// update new User 
router.put('/:id',verifyUser,updateUser)
// delete new User 
router.delete('/:id',verifyUser,deleteUser)
// getsingle new User 
router.get('/:id',verifyUser,getSingleUser)
// get all User 
router.get('/',verifyAdmin,getAllUser)

export default router 