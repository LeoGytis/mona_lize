import Image from 'next/image';
import {pizzas} from '../../data/pizzas';

const SectionMenu = () => {
	return (
		<section id="sectionMenu" className="w-full py-16 lg:py-32">
			<div className="flex flex-col gap-8 justify-center container mx-auto">
				<h1 className="text-4xl font-bold text-center">Our Menu</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{pizzas.map((pizza) => (
						<div
							key={pizza.id}
							className="flex flex-col gap-4 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="relative w-full h-48">
								<Image
									src={pizza.image}
									alt={pizza.name}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
							<h2 className="text-xl font-semibold">
								{pizza.name}
							</h2>
							<p className="text-gray-600">{pizza.description}</p>
							<p className="text-lg font-bold text-orange-500">
								{pizza.price.toFixed(2)} €
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionMenu;
