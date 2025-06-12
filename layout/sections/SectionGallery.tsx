import GallerySlider from '@/components/GallerySlider';

const SectionGallery = () => {
	return (
		<section
			id="sectionGallery"
			className="relative flex items-center justify-center py-10 lg:py-32 w-full h-[200px] md:h-[500px]"
		>
			<GallerySlider />
		</section>
	);
};

export default SectionGallery;
