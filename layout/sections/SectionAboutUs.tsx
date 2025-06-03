import foodTruck from '@/public/images/foodtruck.jpg';
import Image from 'next/image';

const SectionAboutUs = () => {
	return (
		<section
			id="sectionAboutUs"
			className="flex justify-center py-16 lg:py-32"
		>
			<div className="flex w-full gap-8 container">
				<div className="flex flex-col items-end w-1/2 gap-4">
					<h1>Apie Mus</h1>
					<p className="text-end">
						Sveiki atvykę į mūsų autentišką lietuvišką maisto
						autobusą! Mes su uolumu atnešame turtingus Lietuvos
						skonius į jūsų kaimynystę. Nuo tradicinių cepelinų ir
						kugelio iki šaltibarščių ir kibinų, mes patiekame
						autentišką baltišką virtuvę, pagamintą pagal senovines
						receptūras iš šviežių, vietinių ingredientų. Mūsų mobili
						virtuvė atneša Lietuvos šilumą į jūsų renginius ir
						susirinkimus. Pamatykite Lietuvos skonį ant ratų!
					</p>
				</div>
				<div className="relative flex-1 h-96">
					<Image
						src={foodTruck}
						alt="Lietuviškas maisto autobusas"
						fill
						objectFit="cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionAboutUs;
