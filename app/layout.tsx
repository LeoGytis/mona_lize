import Footer from '@/layout/Footer';
import Navbar from '@/layout/NavBar';
import '@/public/globals.css';
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				<main className="flex flex-col">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
