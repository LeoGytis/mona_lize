import express from 'express';
import {postImage} from '../controllers/imageController.js';
import {verifyToken} from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.post('/', verifyToken, upload.single('image'), postImage);

export default router;
