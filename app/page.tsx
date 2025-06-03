'use client';
import {auth} from '@/components/auth/config';
import SectionOne from '@/layout/sections/SectionOne';
import {signOut} from 'firebase/auth';
import {useRouter} from 'next/navigation';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Home() {
	const [user] = useAuthState(auth);
	const router = useRouter();
	const userSession = sessionStorage.getItem('user');

	console.log({user});

	if (!user && !userSession) {
		router.push('/sign-up');
	}
	return (
		<div className="flex flex-col items-center h-dvh">
			<button
				onClick={() => {
					signOut(auth);
					sessionStorage.removeItem('user');
				}}
			>
				Log out
			</button>
			<SectionOne />
		</div>
	);
}
