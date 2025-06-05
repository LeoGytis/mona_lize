'use client';
import {auth} from '@/components/auth/config';
import Logo from '@/public/images/logo_png.png';
import {signOut} from 'firebase/auth';
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
			className="px-6 py-2 text-xl transition-colors duration-300 border border-transparent rounded cursor-pointer text-white hover:bg-orange-300/10 hover:border-orange-300"
		>
			{children}
		</Link>
	);
};

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-between sticky top-0 z-[9999] pl-10 py-4 pt-16 bg-background">
			<Link
				to="/"
				className="absolute flex items-center gap-4 mx-auto cursor-pointer bg-white_ rounded-full border-2 border-white z-10 "
			>
				<div className="border-5 border-black rounded-full">
					<div className="border-5 border-white rounded-full">
						<div className="border-3 border-black p-6 rounded-full bg-black">
							<Image
								src={Logo}
								alt="logo"
								width={100}
								height={20}
								className="invert "
							/>
						</div>
					</div>
				</div>
			</Link>

			<div className="flex items-center justify-end w-full gap-2 max-lg:hidden bg-black py-2 pr-64 shadow-xl ml-16 border-2 border-black">
				<NavLink to="sectionMenu">Menu</NavLink>
				<NavLink to="sectionGallery">Galerija</NavLink>
				<NavLink to="sectionFoodTruck">Apie mus</NavLink>
			</div>
			<div className="absolute right-40 -top-10">
				<button
					onClick={() => {
						signOut(auth);
						sessionStorage.removeItem('user');
					}}
					className="bg-white text-black px-4 py-2 rounded-full hover:bg-orange-500"
				>
					Log out
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
