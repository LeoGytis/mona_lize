import express from 'express';
import {postImage} from '../controllers/imageController';
import {upload} from '../middleware/upload';

const router = express.Router();

router.post('/', upload.single('image'), postImage);

module.exports = router;
