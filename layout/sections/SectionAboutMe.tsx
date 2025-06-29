import hero from '@/public/images/kasparas_cut.png';
import Image from 'next/image';

const SectionAboutMe = () => {
	return (
		<section
			id="sectionAboutMe"
			className="flex justify-center py-10 lg:py-32"
		>
			<div className="flex w-full max-lg:flex-col gap-8 container">
				<div className="relative flex-1 aspect-square  lg:scale-150">
					<Image
						src={hero}
						alt="Pica food truck"
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover"
					/>
				</div>
				<p className="text-center lg:text-end lg:text-lg flex-1 lg:pl-36">
					Idėja atvežti &quot;Mona Ližė&quot; į Lietuvą gimė 2025 metų
					pradžioje. Net ir gyvenant pokyčių ir iššūkių laikotarpiu,
					mes nė akimirkai nesudvejojome - žvelgėme pirmyn. Šis maisto
					furgonėlio atidarymas mums reiškia daugiau nei tiesiog naują
					vietą. Tai - mūsų tapatybės, projekto esmės ir skonio
					filosofijos, turinčios daugybę niuansų, perkėlimas į naują
					kontekstą. &quot;Esu perfekcionistas, todėl kiekvienas
					startas - tai ne atsitiktinumas, o kruopščiai suplanuotas
					žingsnis. Viskas - nuo tešlos iki kiekvieno ingredientų
					pasirinkimo - turi atitikti mūsų viziją. Sėkmė negali apeiti
					sunkaus darbo. Be atsidavimo, jokios istorijos
					nesukursi&quot;&quot;, - sako Ciro Salvo. Mona Ližė Lietuva
					- tai keliaujanti picerija, kuri kepa neapolietiškas picas
					autentiškoje krosnyje, atvežtoje tiesiai iš Italijos.
					Modernus ir funkcionalus foodtruck&apos;as leidžia atvykti
					ten, kur žmonės vertina kokybę ir skonį - nuo miesto švenčių
					iki jaukių vakarų su bendruomene. Mūsų misija - dalintis ta
					pačia aistra, kurią jau nuo 2014-ųjų metų neša 50 Mona Ližė
					vardas. Skonis, tradicija ir drąsa judėti pirmyn - tai mūsų
					receptas.
				</p>
			</div>
		</section>
	);
};

export default SectionAboutMe;
