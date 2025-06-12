import LogoImage from '@/public/images/logo_black.jpg';

import Image from 'next/image';
import {Link} from 'react-scroll';

const BorderedLogo = () => {
	return (
		<Link
			to="sectionMenu"
			smooth={true}
			duration={500}
			className="flex border-2 border-white rounded-full cursor-pointer"
		>
			<div className="border-black rounded-full border-5">
				<div className="border-white rounded-full border-5">
					<div className="p-3 md:p-6 bg-black border-black rounded-full border-3 size-24 md:size-40 flex items-center justify-center">
						<Image
							src={LogoImage}
							alt="logo"
							width={140}
							height={80}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BorderedLogo;
