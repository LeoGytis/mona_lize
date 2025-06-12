import foodTruck from '@/public/images/foodtruck02.png';
import papuga from '@/public/images/papuga.png';
import Image from 'next/image';

const SectionFoodTruck = () => {
	return (
		<section
			id="sectionFoodTruck"
			className="flex justify-center py-10 lg:py-32 bg-background"
		>
			<div className="flex max-lg:flex-col w-full gap-8 container">
				<div className="flex flex-col flex-1 gap-4">
					<h1 className="font-semibold max-lg:text-center">
						Apie Mus
					</h1>
					<p className="lg:text-lg lg:pr-20 max-lg:text-center">
						Sveiki atvykę į mūsų skaniausią pica food truck&apos;ą!
						Mes su aistra ruošiame autentiškas, skaniausias picas iš
						šviežių ingredientų. Nuo klasikinių margaritų ir
						pepperoni iki unikalių kūrybinių kombinacijų, mes
						patiekame picas, pagamintas pagal tradicines receptūras
						su šiuolaikišku posūkiu. Mūsų mobili pica virtuvė atneša
						skonį ir šilumą į jūsų renginius ir susirinkimus.
						Pamatykite skaniausią picą ant ratų!
					</p>
					<div className="relative w-20 h-64">
						<Image
							src={papuga}
							alt="Pica food truck"
							fill
							className="object-contain"
						/>
					</div>
				</div>
				<div className="relative flex-1 aspect-square">
					<Image
						src={foodTruck}
						alt="Pica food truck"
						fill
						objectFit="cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionFoodTruck;
