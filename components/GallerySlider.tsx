import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';
import {galleryImages} from '../utils/constants';

interface GalleryImageProps {
	src: string;
	alt: string;
}

const GallerySlider = () => {
	const splideOptions = {
		type: 'loop',
		autoScroll: {
			pauseOnHover: false,
			pauseOnFocus: false,
			rewind: true,
			speed: 1,
		},
		arrows: false,
		pagination: false,
		gap: '45px',
		fixedWidth: '600px',
		fixedHeight: '400px',
		breakpoints: {
			640: {
				fixedWidth: '300px',
				fixedHeight: '200px',
				gap: '20px',
			},
		},
	};

	return (
		<div className="absolute left-1/2 w-[94dvw] -translate-x-1/2 transform md:w-[98dvw]">
			<Splide options={splideOptions} extensions={{AutoScroll}}>
				{galleryImages.map(
					(image: GalleryImageProps, index: number) => (
						<SplideSlide key={index}>
							<div className="relative h-full w-full overflow-hidden rounded-lg">
								<Image
									src={image.src}
									alt={image.alt}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="object-cover hover:scale-125 transition-all duration-1500"
									priority={index < 2}
								/>
							</div>
						</SplideSlide>
					)
				)}
			</Splide>
		</div>
	);
};

export default GallerySlider;
