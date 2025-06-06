'use client';
import {auth} from '@/components/auth/config';
import BorderedLogo from '@/components/Logo';
import {signOut} from 'firebase/auth';
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
	return (
		<nav className="flex items-center justify-between sticky top-0 z-[9999] pt-14 lg:pt-20 bg-background">
			<div className="absolute left-0 ml-10 max-lg:-left-14 lg:ml-6">
				<BorderedLogo />
			</div>

			<div className="flex items-center justify-end w-full gap-2 py-2 ml-10 bg-black shadow-xl xl:ml-16">
				<div className="container self-end flex justify-end mx-auto lg:mr-[8dvw]">
					<NavLink to="sectionMenu">Menu</NavLink>
					<NavLink to="sectionGallery">Galerija</NavLink>
					<NavLink to="sectionFoodTruck">Apie mus</NavLink>
				</div>
				<div className="absolute top-0 right-40 ">
					<button
						onClick={() => {
							signOut(auth);
							sessionStorage.removeItem('user');
						}}
						className="px-4 py-2 text-black bg-white rounded-full hover:bg-orange-500"
					>
						Log out
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
