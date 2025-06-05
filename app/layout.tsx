import Footer from '@/layout/Footer';
import Navbar from '@/layout/NavBar';
import '@/public/globals.css';
import type {Metadata} from 'next';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Mona Ližė',
	description: '- skanios picos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable}  antialiased`}>
				<Navbar />
				<main className="flex flex-col min-h-dvh bg-background">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
