'use client';
import BorderedLogo from '@/components/Logo';
import {useAuth} from '@/utils/AuthContext';
import {Link} from 'react-scroll';

interface NavLinkProps {
	to: string;
	children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({to, children}) => {
	return (
		<Link
			to={to}
			smooth={true}
			duration={500}
			offset={-100}
			className="px-2 py-1 text-white transition-colors duration-300 border border-transparent rounded-lg cursor-pointer lg:px-6 lg:py-2 lg:text-xl hover:bg-orangemain/10 hover:border-orangemain"
		>
			{children}
		</Link>
	);
};

export const Navbar = () => {
	const {user, signOut} = useAuth();

	return (
		<nav className="flex items-center justify-between sticky top-0 z-[9999] pt-14 lg:pt-20 bg-background">
			<div className="absolute top-4 ml-2 lg:ml-6 z-50">
				<BorderedLogo />
			</div>

			<div className="relative items-center justify-end w-full gap-2 py-6 md:py-8 bg-black shadow-xl xl:ml-16 ml-8">
				<div className="absolute top-1/2 -translate-y-1/2 container flex justify-end mx-auto">
					<NavLink to="sectionMenu">Menu</NavLink>
					<NavLink to="sectionGallery">Galerija</NavLink>
					<NavLink to="sectionFoodTruck">Apie mus</NavLink>
				</div>
			</div>
			{user ? (
				<div className="absolute top-1 right-20">
					<button onClick={signOut} className="btn-primary">
						Log out
					</button>
				</div>
			) : (
				<div className="absolute !px-8 top-1 md:top-5 right-20 btn-primary">
					<a href="/sign-in">Sign in</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
