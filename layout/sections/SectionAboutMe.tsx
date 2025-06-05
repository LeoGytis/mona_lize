import foodTruck from '@/public/images/kasparas.jpg';
import Image from 'next/image';

const SectionAboutMe = () => {
	return (
		<section
			id="sectionAboutMe"
			className="flex justify-center py-16 lg:py-32 bg-background"
		>
			<div className="flex w-full gap-8 container">
				<div className="relative flex-1 h-96">
					<Image
						src={foodTruck}
						alt="Pica food truck"
						fill
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-col items-end w-1/2 gap-4">
					<h1>Apie Mane</h1>
					<p className="text-end">
						Sveiki atvykę į mūsų skaniausią pica food truck&apos;ą!
						Mes su aistra ruošiame autentiškas, skaniausias picas iš
						šviežių ingredientų. Nuo klasikinių margaritų ir
						pepperoni iki unikalių kūrybinių kombinacijų, mes
						patiekame picas, pagamintas pagal tradicines receptūras
						su šiuolaikišku posūkiu. Mūsų mobili pica virtuvė atneša
						skonį ir šilumą į jūsų renginius ir susirinkimus.
						Pamatykite skaniausią picą ant ratų!
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionAboutMe;
