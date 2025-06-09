'use client';
import BorderedLogo from '@/components/Logo';

const Footer = () => {
	return (
		<section className="py-10 text-white bg-black border-t-2 border-white shadow-t-lg lg:py-32">
			<div className="container flex justify-between gap-10 mx-auto lg:items-center lg:text-lg max-lg:flex-col-reverse">
				<div className="flex flex-col gap-4 max-lg:pl-10">
					<h3>Paslaugos</h3>
					<span>Užsakomiei išvykimai</span>
					<span>Gera nuotaika</span>
					<span>Edukacijos</span>
					<span>Trali vali</span>
				</div>
				<div className="flex flex-col gap-4 max-lg:pl-10">
					<h3>Rekvizitai</h3>
					<span>Imones Kodas: 123456789</span>
					<span>Swedbank</span>
					<span>A/S: LTLT157300010158228888</span>
				</div>
				<div className="flex gap-10 max-lg:flex-row-reverse max-lg:justify-end ">
					<div className="flex flex-col items-center justify-center gap-2">
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
					<BorderedLogo />
				</div>
			</div>
		</section>
	);
};

export default Footer;
