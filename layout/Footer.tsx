'use client';
import Logo from '@/public/images/logo_png.png';
import Image from 'next/image';

const Footer = () => {
	return (
		<section className="sticky bg-black border-t-2 border-orangemain text-white">
			<div className="mx-auto max-w-screen-xl flex justify-between items-center text-lg py-16 ">
				<div className="flex flex-col gap-4">
					<h3>Paslaugos</h3>
					<span>Užsakomiei išvykimai</span>
					<span>Gera nuotaika</span>
					<span>Edukacijos</span>
					<span>Trali vali</span>
				</div>
				<div className="flex flex-col gap-4">
					<h3>Rekvizitai</h3>
					<span>Imones Kodas: 123456789</span>
					<span>Swedbank</span>
					<span>A/S: LTLT157300010158228888</span>
				</div>
				<div className="flex flex-col gap-10">
					<Image
						src={Logo}
						alt="logo"
						width={80}
						height={80}
						className="hover:cursor-pointer self-center"
					/>
					<div className="flex flex-col gap-2 justify-center items-center">
						<a href="tel:+37068223555" className="hover:underline ">
							+370 682 23555
						</a>
						<a
							href="mailto:info@monalize.lt"
							className="hover:underline"
						>
							info@monalize.lt
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
