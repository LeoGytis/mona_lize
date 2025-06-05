'use client';

import MenuList from '@/components/menu/MenuList';
import SectionAboutMe from '@/layout/sections/SectionAboutMe';
import SectionFoodTruck from '@/layout/sections/SectionFoodTruck';
// import {auth} from '@/components/auth/config';
// import {useRouter} from 'next/navigation';
// import {useAuthState} from 'react-firebase-hooks/auth';

export default function Home() {
	// const [user] = useAuthState(auth);
	// const router = useRouter();
	// const userSession = sessionStorage.getItem('user');

	// console.log({user});

	// if (!user && !userSession) {
	// 	router.push('/sign-up');
	// }

	return (
		<div className="flex flex-col items-center">
			<SectionAboutMe />
			<MenuList />

			<SectionFoodTruck />
		</div>
	);
}
