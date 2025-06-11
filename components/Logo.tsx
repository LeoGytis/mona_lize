import LogoImage from '@/public/images/logo_black.jpg';

import Image from 'next/image';
import {Link} from 'react-scroll';

const BorderedLogo = () => {
	return (
		<Link
			to="sectionMenu"
			smooth={true}
			duration={500}
			className="flex border-2 border-white rounded-full cursor-pointer max-lg:scale-75"
		>
			<div className="border-black rounded-full border-5">
				<div className="border-white rounded-full border-5">
					<div className="p-6 bg-black border-black rounded-full border-3 ">
						<Image
							src={LogoImage}
							alt="logo"
							width={100}
							height={20}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BorderedLogo;
