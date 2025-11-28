// components/LayoutWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import TopBarWrapper from './TopBarWrapper';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isDashboard = pathname?.startsWith('/client');

	if (isDashboard) {
		// For dashboard pages, render only the content
		return <>{children}</>;
	}

	// For all other pages, render with full layout
	return (
		<>
			<TopBarWrapper />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
