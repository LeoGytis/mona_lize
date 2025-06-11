import Image from 'next/image';

const SectionGallery = () => {
	// Array of image paths from the dropbox folder
	const images = [
		{src: '/images/dropbox/581A3582.jpg', alt: 'Gallery image 1'},
		{src: '/images/dropbox/581A3573.jpg', alt: 'Gallery image 2'},
		{src: '/images/dropbox/581A3447.jpg', alt: 'Gallery image 3'},
		{src: '/images/dropbox/581A3439.jpg', alt: 'Gallery image 4'},
		{src: '/images/dropbox/581A3431.jpg', alt: 'Gallery image 5'},
		{src: '/images/dropbox/581A3426.jpg', alt: 'Gallery image 6'},
		{src: '/images/dropbox/581A3006.jpg', alt: 'Gallery image 7'},
		{src: '/images/dropbox/581A2945.jpg', alt: 'Gallery image 8'},
		{src: '/images/dropbox/581A2941.jpg', alt: 'Gallery image 9'},
		{src: '/images/dropbox/581A2853.jpg', alt: 'Gallery image 10'},
		{src: '/images/dropbox/581A2739.jpg', alt: 'Gallery image 11'},
		{src: '/images/dropbox/581A2727.jpg', alt: 'Gallery image 12'},
		{src: '/images/dropbox/581A2720.jpg', alt: 'Gallery image 13'},
		{src: '/images/dropbox/581A2712.jpg', alt: 'Gallery image 14'},
		{src: '/images/dropbox/581A2702.jpg', alt: 'Gallery image 15'},
		{src: '/images/dropbox/581A2591.jpg', alt: 'Gallery image 16'},
		{src: '/images/dropbox/581A2574.jpg', alt: 'Gallery image 17'},
		{src: '/images/dropbox/581A2354.jpg', alt: 'Gallery image 18'},
	];

	return (
		<section
			id="sectionGallery"
			className="flex justify-center py-10 lg:py-32 w-full"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{images.map((image, index) => (
						<div
							key={index}
							className="relative aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover"
								// sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
								priority={index < 4} // Load first 4 images immediately
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionGallery;
