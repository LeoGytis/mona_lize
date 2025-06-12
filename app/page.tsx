'use client';
import {ImageUploader} from '@/components/ImageUploader';
import SectionAboutMe from '@/layout/sections/SectionAboutMe';
import SectionFoodTruck from '@/layout/sections/SectionFoodTruck';
import SectionGallery from '@/layout/sections/SectionGallery';
import SectionMenu from '@/layout/sections/SectionMenu';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<ImageUploader />
			<SectionAboutMe />
			<SectionMenu />
			<SectionGallery />
			<SectionFoodTruck />
		</div>
	);
}
