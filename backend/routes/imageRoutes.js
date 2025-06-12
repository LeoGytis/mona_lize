import express from 'express';
import {postImage} from '../controllers/imageController';
import {upload} from '../middleware/upload';

const Router = express.Router();

Router.post('/', upload.single('image'), postImage);

module.exports = {Router};
