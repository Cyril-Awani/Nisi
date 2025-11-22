import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';
import './globals.css';
import TopBarWrapper from '@/components/TopBarWrapper';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Nisi Technologies',
	description: 'Connecting You to the World',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} font-sans antialiased`}>
				<TopBarWrapper />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
