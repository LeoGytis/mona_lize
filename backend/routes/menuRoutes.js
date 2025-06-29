import express from 'express';
import {
	menu_create,
	menu_delete,
	menu_details,
	menu_index,
	menu_update,
} from '../controllers/menuController.js';
import {verifyToken} from '../middleware/auth.js';
import fileUpload from '../middleware/fileUpload.js';

const router = express.Router();

// Public routes (no auth required)
router.get('/', menu_index);
router.get('/:id', menu_details);

// Protected routes (auth required)
router.post('/', verifyToken, fileUpload.single('image'), menu_create);
router.patch('/:id', verifyToken, fileUpload.single('image'), menu_update);
router.delete('/:id', verifyToken, menu_delete);

export default router;
