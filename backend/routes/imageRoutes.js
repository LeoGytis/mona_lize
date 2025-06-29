import express from 'express';
import {postImage} from '../controllers/imageController.js';
import {verifyToken} from '../middleware/auth.js';
import fileUploadLocal from '../middleware/fileUploadLocal.js';

const router = express.Router();

router.post('/', verifyToken, fileUploadLocal.single('image'), postImage);

export default router;
