import express from 'express';
import {postImage} from '../controllers/imageController.js';
// import {verifyToken} from '../middleware/auth.js';
// import upload from '../middleware/upload.js';
import uploadLocal from '../middleware/uploadLocal.js';

const router = express.Router();

router.post('/', uploadLocal.single('image'), postImage);

export default router;
