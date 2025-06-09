'use client';
import SectionAboutMe from '@/layout/sections/SectionAboutMe';
import SectionFoodTruck from '@/layout/sections/SectionFoodTruck';
import SectionMenu from '@/layout/sections/SectionMenu';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<SectionAboutMe />
			<SectionMenu />
			<SectionFoodTruck />
		</div>
	);
}
