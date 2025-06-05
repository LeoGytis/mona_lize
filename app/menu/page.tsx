'use client';

import MenuList from '@/components/menu/MenuList';

export default function MenuPage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-center mb-8">Our Menu</h1>
			<MenuList />
		</div>
	);
}
