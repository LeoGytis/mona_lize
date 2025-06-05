import foodTruck from '@/public/images/kasparas_cut.png';
import Image from 'next/image';

const SectionAboutMe = () => {
	return (
		<section
			id="sectionAboutMe"
			className="flex justify-center py-16 lg:py-32"
		>
			<div className="flex w-full gap-8 container">
				<div className="relative flex-1 h-96_ scale-150">
					<Image
						src={foodTruck}
						alt="Pica food truck"
						fill
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-col items-end w-1/2 gap-4 pl-36">
					<h1 className="font-semibold">Apie Mane</h1>
					<p className="text-end text-lg">
						Idėja atvežti &quot;Mona Ližė&quot; į Lietuvą gimė 2025
						metų pradžioje. Net ir gyvenant pokyčių ir iššūkių
						laikotarpiu, mes nė akimirkai nesudvejojome - žvelgėme
						pirmyn. Šis maisto furgonėlio atidarymas mums reiškia
						daugiau nei tiesiog naują vietą. Tai - mūsų tapatybės,
						projekto esmės ir skonio filosofijos, turinčios daugybę
						niuansų, perkėlimas į naują kontekstą. &quot;Esu
						perfekcionistas, todėl kiekvienas startas - tai ne
						atsitiktinumas, o kruopščiai suplanuotas žingsnis.
						Viskas - nuo tešlos iki kiekvieno ingredientų
						pasirinkimo - turi atitikti mūsų viziją. Sėkmė negali
						apeiti sunkaus darbo. Be atsidavimo, jokios istorijos
						nesukursi&quot;&quot;, - sako Ciro Salvo. Mona Ližė
						Lietuva - tai keliaujanti picerija, kuri kepa
						neapolietiškas picas autentiškoje krosnyje, atvežtoje
						tiesiai iš Italijos. Modernus ir funkcionalus
						foodtruck&apos;as leidžia atvykti ten, kur žmonės
						vertina kokybę ir skonį - nuo miesto švenčių iki jaukių
						vakarų su bendruomene. Mūsų misija - dalintis ta pačia
						aistra, kurią jau nuo 2014-ųjų metų neša 50 Mona Ližė
						vardas. Skonis, tradicija ir drąsa judėti pirmyn - tai
						mūsų receptas.
					</p>
				</div>
			</div>
		</section>
	);
};

export default SectionAboutMe;
