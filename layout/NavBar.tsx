'use client';
import Logo from '@/public/logo/logo_black.png';
import Image from 'next/image';
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
			className="px-6 py-2 text-xl transition-colors duration-300 border border-transparent rounded cursor-pointer hover:bg-orange-300/10 hover:border-orange-300"
		>
			{children}
		</Link>
	);
};

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between sticky top-0 z-[9999] px-10 py-4 border-b border-orange-400 background shadow-xl">
			<Link
				to="/"
				className="flex items-center gap-4 mx-auto cursor-pointer"
			>
				<Image src={Logo} alt="logo" width={100} height={20} />
				<h1 className="text-4xl text-nowrap">Dream Tents</h1>
			</Link>

			<div className="flex items-center justify-end w-full gap-2 max-lg:hidden">
				<NavLink to="sectionMenu">Menu</NavLink>
				<NavLink to="sectionGallery">Galerija</NavLink>
				<NavLink to="sectionAboutUs">Apie mus</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
