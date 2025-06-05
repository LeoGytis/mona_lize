import Menu from '../models/menu.js';

const menu_index = async (req, res) => {
	try {
		const menus = await Menu.find().sort({createdAt: -1});
		res.status(200).json(menus);
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to fetch menus'});
	}
};

// Get single menu by ID
const menu_details = async (req, res) => {
	try {
		const menu = await Menu.findById(req.params.id);
		if (!menu) {
			return res.status(404).json({error: 'Menu not found'});
		}
		res.status(200).json(menu);
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to fetch menu'});
	}
};

// Create new menu
const menu_create = async (req, res) => {
	try {
		const menu = new Menu(req.body);
		const savedMenu = await menu.save();
		res.status(201).json(savedMenu);
	} catch (err) {
		console.error(err);
		res.status(400).json({error: 'Failed to create menu'});
	}
};

// Update menu
const menu_update = async (req, res) => {
	try {
		if (!Object.keys(req.body).length) {
			return res
				.status(400)
				.json({error: 'No fields provided for update'});
		}

		const updatedMenu = await Menu.findByIdAndUpdate(
			req.params.id,
			req.body,
			{new: true, runValidators: true}
		);

		if (!updatedMenu) {
			return res.status(404).json({error: 'Menu not found'});
		}

		res.status(200).json(updatedMenu);
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to update menu'});
	}
};

// Delete menu
const menu_delete = async (req, res) => {
	try {
		const menu = await Menu.findByIdAndDelete(req.params.id);
		if (!menu) {
			return res.status(404).json({error: 'Menu not found'});
		}
		res.status(200).json({message: 'Menu deleted successfully'});
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to delete menu'});
	}
};

export {menu_create, menu_delete, menu_details, menu_index, menu_update};
