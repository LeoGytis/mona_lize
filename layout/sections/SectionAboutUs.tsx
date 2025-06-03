import Image from 'next/image';

const SectionAboutUs = () => {
	return (
		<section
			id="sectionAboutUs"
			className="flex justify-center py-16 lg:py-32"
		>
			<div className="flex w-full gap-8 container">
				<div className="flex flex-col items-end w-1/2 gap-4">
					<h1>About Us</h1>
					<p className="text-end">
						Our mission is to create stylish and modern spaces
						tailored to your unique needs, ensuring a seamless and
						memorable experience. To enhance your event, we also
						offer a range of additional services, including
						furniture rentals, pavilion lighting, and illuminated
						letter rentals, making it easy to bring your vision to
						life. Let us help you create an unforgettable
						celebration with our professional and comprehensive
						event services.
					</p>
				</div>
				<div className="relative flex-1 h-96">
					<Image
						src={`/images/about_us.jpg`}
						alt="tentssection"
						fill
						objectFit="cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionAboutUs;
