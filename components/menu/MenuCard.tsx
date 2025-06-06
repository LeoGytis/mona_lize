import Image from 'next/image';
import React, {useState} from 'react';
import {MenuItem} from '../../service/menuRequests';
import MenuCardForm from './MenuCardForm';

interface MenuCardProps {
	item: MenuItem;
	onUpdate: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({item, onUpdate}) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleCancel = () => {
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<MenuCardForm
				item={item}
				onCancel={handleCancel}
				onUpdate={onUpdate}
			/>
		);
	}

	return (
		<div className="">
			{item.image && item.image.data && (
				<div className="mb-10 relative w-full h-48">
					<Image
						src={`data:${item.image.contentType};base64,${item.image.data}`}
						alt={item.name}
						fill
						className="object-cover rounded-lg duration-1000 ease-out transform hover:scale-125"
					/>
				</div>
			)}
			<div className="flex flex-col justify-between gap-2 min-h-40 text-xl">
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold">{item.name}</h3>
					<p className="text-gray-700 text-lg">{item.description}</p>
				</div>
				<p className="font-bold mb-6">{item.price.toFixed(2)} €</p>
			</div>
			<button
				onClick={() => setIsEditing(true)}
				className="bg-yellow-500 text-white px-8 py-2 rounded-lg hover:bg-yellow-600 w-fit cursor-pointer"
			>
				Edit
			</button>
		</div>
	);
};

export default MenuCard;
