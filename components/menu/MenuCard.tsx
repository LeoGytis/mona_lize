import {useIntersectionObserver} from '@/hooks/useIntersectionObserver';
import Image from 'next/image';
import React, {useState} from 'react';
import {MenuItem} from '../../service/menuRequests';
import {useAuth} from '../auth/AuthContext';
import MenuCardForm from './MenuCardForm';

interface MenuCardProps {
	item: MenuItem;
	onUpdate: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({item, onUpdate}) => {
	const {user} = useAuth();
	const {ref: elementRef, isIntersecting} = useIntersectionObserver({
		threshold: 0.9,
		rootMargin: '0px',
	});
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
		<div ref={elementRef}>
			{item.image && item.image.data && (
				<div
					ref={elementRef}
					className="relative w-full h-48 mb-6 overflow-hidden rounded-lg md:mb-10"
				>
					<div
						className={`w-full h-full transition-all duration-1000 ease-out transform scale-100 ${
							isIntersecting
								? 'max-md:scale-125 md:hover:scale-125'
								: 'hover:scale-125'
						} in-view`}
					>
						<Image
							src={`data:${item.image.contentType};base64,${item.image.data}`}
							alt={item.name}
							fill
							className="object-cover"
						/>
					</div>
				</div>
			)}
			<div className="flex justify-between gap-2 text-xl md:flex-col md:min-h-40">
				<div className="flex flex-col gap-2">
					<h3 className="font-semibold">{item.name}</h3>
					<p className="text-lg text-gray-700">{item.description}</p>
				</div>
				<p className="mb-6 font-bold">{item.price.toFixed(2)} €</p>
			</div>
			{user && (
				<button
					onClick={() => setIsEditing(true)}
					className="!px-8 w-fit btn-primary"
				>
					Edit
				</button>
			)}
		</div>
	);
};

export default MenuCard;
