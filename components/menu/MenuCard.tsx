import React, {useState} from 'react';
import {MenuItem, menuRequests} from '../../service/menuRequests';
import MenuCardForm from './MenuCardForm';

interface MenuCardProps {
	item: MenuItem;
	onUpdate: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({item, onUpdate}) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleSubmit = async (updatedItem: MenuItem) => {
		try {
			await menuRequests.updateMenuItem(updatedItem.id, updatedItem);
			setIsEditing(false);
			onUpdate();
		} catch (error) {
			console.error('Error updating menu item:', error);
		}
	};

	const handleDelete = async () => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			try {
				await menuRequests.deleteMenuItem(item.id);
				onUpdate();
			} catch (error) {
				console.error('Error deleting menu item:', error);
			}
		}
	};

	const handleCancel = () => {
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<MenuCardForm
				item={item}
				onSubmit={handleSubmit}
				onCancel={handleCancel}
			/>
		);
	}

	return (
		<div className="bg-white p-4 rounded-lg shadow-md">
			<h3 className="text-lg font-semibold">{item.name}</h3>
			<p className="text-gray-600 mb-2">{item.description}</p>
			<p className="text-lg font-bold mb-2">${item.price.toFixed(2)}</p>
			<div className="flex gap-2">
				<button
					onClick={() => setIsEditing(true)}
					className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
				>
					Edit
				</button>
				<button
					onClick={handleDelete}
					className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default MenuCard;
