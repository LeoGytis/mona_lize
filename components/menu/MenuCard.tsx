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
				<div className="relative w-full h-48 mb-10">
					<Image
						src={`data:${item.image.contentType};base64,${item.image.data}`}
						alt={item.name}
						fill
						className="object-cover duration-1000 ease-out transform rounded-lg hover:scale-125"
					/>
				</div>
			)}
			<div className="flex flex-col justify-between gap-2 text-xl min-h-40">
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold">{item.name}</h3>
					<p className="text-lg text-gray-700">{item.description}</p>
				</div>
				<p className="mb-6 font-bold">{item.price.toFixed(2)} €</p>
			</div>
			<button
				onClick={() => setIsEditing(true)}
				className="!px-8 w-fit btn-primary"
			>
				Edit
			</button>
		</div>
	);
};

export default MenuCard;
