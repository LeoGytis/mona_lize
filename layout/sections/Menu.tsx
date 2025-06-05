import React, {useEffect, useState} from 'react';
import {MenuItem, menuRequests} from '../../service/menuRequests';

const Menu: React.FC = () => {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
	const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState<Omit<MenuItem, 'id'>>({
		name: '',
		description: '',
		price: 0,
	});

	useEffect(() => {
		loadMenuItems();
	}, []);

	const loadMenuItems = async () => {
		try {
			const items = await menuRequests.getAllMenuItems();

			console.log('🔥 : items =>', items);
			setMenuItems(items);
		} catch (error) {
			console.error('Error loading menu items:', error);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: name === 'price' ? parseFloat(value) : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (isEditing && selectedItem) {
				await menuRequests.updateMenuItem(selectedItem.id, formData);
			} else {
				await menuRequests.createMenuItem(formData);
			}
			resetForm();
			loadMenuItems();
		} catch (error) {
			console.error('Error saving menu item:', error);
		}
	};

	const handleEdit = (item: MenuItem) => {
		setSelectedItem(item);
		setFormData({
			name: item.name,
			description: item.description,
			price: item.price,
		});
		setIsEditing(true);
	};

	const handleDelete = async (id: string) => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			try {
				await menuRequests.deleteMenuItem(id);
				loadMenuItems();
			} catch (error) {
				console.error('Error deleting menu item:', error);
			}
		}
	};

	const resetForm = () => {
		setFormData({
			name: '',
			description: '',
			price: 0,
		});
		setSelectedItem(null);
		setIsEditing(false);
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-6">Menu Management</h1>

			{/* Form */}
			<form
				onSubmit={handleSubmit}
				className="mb-8 bg-white p-6 rounded-lg shadow-md"
			>
				<h2 className="text-xl font-semibold mb-4">
					{isEditing ? 'Edit Menu Item' : 'Add New Menu Item'}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block mb-2">Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							className="w-full p-2 border rounded"
							required
						/>
					</div>
					<div>
						<label className="block mb-2">Price</label>
						<input
							type="number"
							name="price"
							value={formData.price}
							onChange={handleInputChange}
							className="w-full p-2 border rounded"
							required
							min="0"
							step="0.01"
						/>
					</div>
					<div className="md:col-span-2">
						<label className="block mb-2">Description</label>
						<textarea
							name="description"
							value={formData.description}
							onChange={handleInputChange}
							className="w-full p-2 border rounded"
							required
							rows={3}
						/>
					</div>
				</div>
				<div className="mt-4 flex gap-2">
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					>
						{isEditing ? 'Update' : 'Add'} Item
					</button>
					{isEditing && (
						<button
							type="button"
							onClick={resetForm}
							className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
						>
							Cancel
						</button>
					)}
				</div>
			</form>

			{/* Menu Items List */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="bg-white p-4 rounded-lg shadow-md"
					>
						<h3 className="text-lg font-semibold">{item.name}</h3>
						<p className="text-gray-600 mb-2">{item.description}</p>
						<p className="text-lg font-bold mb-2">
							${item.price.toFixed(2)}
						</p>
						<div className="flex gap-2">
							<button
								onClick={() => handleEdit(item)}
								className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
							>
								Edit
							</button>
							<button
								onClick={() => handleDelete(item.id)}
								className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
