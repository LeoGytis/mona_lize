import Image from 'next/image';
import React, {useState} from 'react';
import {MenuItem, menuRequests} from '../../service/menuRequests';
import MenuCardForm from './MenuCardForm';

interface MenuCardProps {
	item: MenuItem;
	onUpdate: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({item, onUpdate}) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleSubmit = async (updatedItem: MenuItem | FormData) => {
		try {
			await menuRequests.updateMenuItem(item.id, updatedItem);
			setIsEditing(false);
			onUpdate();
		} catch (error) {
			console.error('Error updating menu item:', error);
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
				onUpdate={onUpdate}
			/>
		);
	}

	return (
		<div className="p-4">
			{item.image && item.image.data && (
				<div className="mb-10 relative w-full h-48">
					<Image
						src={`data:${item.image.contentType};base64,${item.image.data}`}
						alt={item.name}
						fill
						className="object-cover rounded-lg duration-1000 ease-out transform hover:scale-125"
						onError={(e) => {
							console.error('Image failed to load:', e);
							console.log(
								'Attempted image src:',
								e.currentTarget.src
							);
						}}
					/>
				</div>
			)}
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
			</div>
		</div>
	);
};

export default MenuCard;
