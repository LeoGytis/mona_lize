import pizza01 from '@/public/images/pizza/pizza01.jpg';
import pizza02 from '@/public/images/pizza/pizza02.jpg';
import pizza03 from '@/public/images/pizza/pizza03.jpg';
import pizza04 from '@/public/images/pizza/pizza04.jpg';

export interface Pizza {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
}

export const pizzas: Pizza[] = [
	{
		id: 1,
		name: 'Margherita',
		description:
			'Classic pizza with fresh tomatoes, mozzarella, basil, and extra virgin olive oil',
		price: 12.99,
		image: pizza01.src,
	},
	{
		id: 2,
		name: 'Pepperoni',
		description:
			'Traditional pizza topped with spicy pepperoni slices and melted mozzarella cheese',
		price: 14.99,
		image: pizza02.src,
	},
	{
		id: 3,
		name: 'Quattro Formaggi',
		description:
			'Rich pizza featuring four different types of cheese: mozzarella, gorgonzola, fontina, and parmesan',
		price: 16.99,
		image: pizza03.src,
	},
	{
		id: 4,
		name: 'Vegetarian Delight',
		description:
			'Fresh vegetables including bell peppers, mushrooms, onions, olives, and tomatoes on a crispy crust',
		price: 15.99,
		image: pizza04.src,
	},
];
