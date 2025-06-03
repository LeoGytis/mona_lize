'use client';

import {MenuItem, menuRequests} from '@/service/menuRequests';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function MenuPage() {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMenuItems = async () => {
			try {
				const items = await menuRequests.getAllMenuItems();
				setMenuItems(items);
			} catch (err) {
				setError('Failed to load menu items');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchMenuItems();
	}, []);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-red-500 text-xl">{error}</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{menuItems.map((item) => (
					<div
						key={item.id}
						className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
					>
						{item.imageUrl && (
							<div className="relative h-48 w-full">
								<Image
									src={item.imageUrl}
									alt={item.name}
									fill
									className="object-cover"
								/>
							</div>
						)}
						<div className="p-4">
							<div className="flex justify-between items-start mb-2">
								<h2 className="text-xl font-semibold">
									{item.name}
								</h2>
								<span className="text-lg font-bold text-blue-600">
									${item.price.toFixed(2)}
								</span>
							</div>
							<p className="text-gray-600 mb-2">
								{item.description}
							</p>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-500">
									{item.category}
								</span>
								<span
									className={`px-2 py-1 rounded text-sm ${
										item.isAvailable
											? 'bg-green-100 text-green-800'
											: 'bg-red-100 text-red-800'
									}`}
								>
									{item.isAvailable
										? 'Available'
										: 'Unavailable'}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
