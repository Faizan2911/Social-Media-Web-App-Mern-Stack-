import express from "express";
import { UnFollowUser, deleteUser, followUser, getAllUsers, getUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();


router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', UnFollowUser);

export default router;