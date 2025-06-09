import {AuthProvider} from '@/components/auth/AuthContext';
import Footer from '@/layout/Footer';
import {Navbar} from '@/layout/NavBar';
import '@/public/globals.css';
import type {Metadata} from 'next';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'Mona Lize',
	description: 'Mona Lize Food Truck',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} antialiased`}>
				<AuthProvider>
					<Navbar />
					<main className="flex flex-col min-h-dvh bg-background">
						{children}
					</main>
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
