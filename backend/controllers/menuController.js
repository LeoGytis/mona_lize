// Dummy menu data
const dummyMenus = [
	{
		id: '1',
		name: 'Classic Burger',
		description: 'Juicy beef patty with fresh vegetables and special sauce',
		price: 12.99,
		image: 'https://example.com/burger.jpg',
		createdAt: new Date('2024-01-01'),
	},
	{
		id: '2',
		name: 'Margherita Pizza',
		description:
			'Traditional pizza with tomato sauce, mozzarella, and fresh basil',
		price: 14.99,
		image: 'https://example.com/pizza.jpg',
		createdAt: new Date('2024-01-02'),
	},
	{
		id: '3',
		name: 'Caesar Salad',
		description:
			'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
		price: 8.99,
		image: 'https://example.com/salad.jpg',
		createdAt: new Date('2024-01-03'),
	},
];

// Get all menus
const menu_index = async (req, res) => {
	try {
		res.status(200).json(dummyMenus);
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to fetch menus'});
	}
};

// Get single menu by ID
const menu_details = async (req, res) => {
	try {
		const menu = dummyMenus.find((menu) => menu.id === req.params.id);
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
		const newMenu = {
			id: (dummyMenus.length + 1).toString(),
			...req.body,
			createdAt: new Date(),
		};
		dummyMenus.push(newMenu);
		res.status(201).json(newMenu);
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

		const menuIndex = dummyMenus.findIndex(
			(menu) => menu.id === req.params.id
		);
		if (menuIndex === -1) {
			return res.status(404).json({error: 'Menu not found'});
		}

		const updatedMenu = {
			...dummyMenus[menuIndex],
			...req.body,
		};
		dummyMenus[menuIndex] = updatedMenu;

		res.status(200).json(updatedMenu);
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to update menu'});
	}
};

// Delete menu
const menu_delete = async (req, res) => {
	try {
		const menuIndex = dummyMenus.findIndex(
			(menu) => menu.id === req.params.id
		);
		if (menuIndex === -1) {
			return res.status(404).json({error: 'Menu not found'});
		}
		dummyMenus.splice(menuIndex, 1);
		res.status(200).json({message: 'Menu deleted successfully'});
	} catch (err) {
		console.error(err);
		res.status(500).json({error: 'Failed to delete menu'});
	}
};

export {menu_create, menu_delete, menu_details, menu_index, menu_update};
