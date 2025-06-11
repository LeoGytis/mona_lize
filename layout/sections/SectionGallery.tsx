import Image from 'next/image';

const SectionGallery = () => {
	// Array of image paths from the dropbox folder
	const images = [
		'/images/dropbox/581A3582.jpg',
		'/images/dropbox/581A3573.jpg',
		'/images/dropbox/581A3447.jpg',
		'/images/dropbox/581A3439.jpg',
		'/images/dropbox/581A3431.jpg',
		'/images/dropbox/581A3426.jpg',
		'/images/dropbox/581A3006.jpg',
		'/images/dropbox/581A2945.jpg',
		'/images/dropbox/581A2941.jpg',
		'/images/dropbox/581A2853.jpg',
		'/images/dropbox/581A2739.jpg',
		'/images/dropbox/581A2727.jpg',
		'/images/dropbox/581A2720.jpg',
		'/images/dropbox/581A2712.jpg',
		'/images/dropbox/581A2702.jpg',
		'/images/dropbox/581A2591.jpg',
		'/images/dropbox/581A2574.jpg',
		'/images/dropbox/581A2354.jpg',
	];

	return (
		<section
			id="sectionGallery"
			className="flex justify-center py-10 lg:py-32"
		>
			<div className="container">
				<h2 className="mb-8 text-3xl font-semibold text-center">
					Galerija
				</h2>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{images.map((src, index) => (
						<div
							key={index}
							className="relative aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
						>
							<Image
								src={src}
								alt={`Gallery image ${index + 1}`}
								fill
								className="object-cover"
								sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionGallery;
