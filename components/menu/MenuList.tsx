import React, {useEffect, useState} from 'react';
import {MenuItem, menuRequests} from '../../service/menuRequests';
import MenuCard from './MenuCard';
import MenuCardForm from './MenuCardForm';

const MenuList: React.FC = () => {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
	console.log('🔥 : menuItems =>', menuItems);
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		loadMenuItems();
	}, []);

	const loadMenuItems = async () => {
		try {
			const items = await menuRequests.getAllMenuItems();
			setMenuItems(items);
		} catch (error) {
			console.error('Error loading menu items:', error);
		}
	};

	const handleCreate = async (formData: MenuItem | FormData) => {
		try {
			await menuRequests.createMenuItem(formData);
			setIsCreating(false);
			loadMenuItems();
		} catch (error) {
			console.error('Error creating menu item:', error);
		}
	};

	const handleCancel = () => {
		setIsCreating(false);
	};

	return (
		<div id="sectionMenu" className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-6">
				{!isCreating && (
					<button
						onClick={() => setIsCreating(true)}
						className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center gap-2"
					>
						<span className="text-xl">+</span>
						<span>Add New</span>
					</button>
				)}
			</div>

			{isCreating && (
				<div className="mb-6">
					<MenuCardForm
						item={{
							id: 'new',
							name: '',
							description: '',
							price: 0,
						}}
						onSubmit={handleCreate}
						onCancel={handleCancel}
						onUpdate={loadMenuItems}
					/>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{menuItems.map((item) => (
					<MenuCard
						key={item.id}
						item={item}
						onUpdate={loadMenuItems}
					/>
				))}
			</div>
		</div>
	);
};

export default MenuList;
