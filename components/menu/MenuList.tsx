import React, {useEffect, useState} from 'react';
import {MenuItem, menuRequests} from '../../service/menuRequests';
import CreateMenuSection from './CreateMenuSection';
import MenuCard from './MenuCard';

const MenuList: React.FC = () => {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

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

	return (
		<div id="sectionMenu" className="container mx-auto !p-0">
			<CreateMenuSection onUpdate={loadMenuItems} />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
