import express from 'express';
import {
	menu_create,
	menu_delete,
	menu_details,
	menu_index,
	menu_update,
} from '../controllers/menuController.js';

const router = express.Router();

router.get('/', menu_index);
router.get('/:id', menu_details);
router.post('/', menu_create);
router.patch('/:id', menu_update);
router.delete('/:id', menu_delete);

export default router;
