'use client';
import Sidebar from './components/sidebar';

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-screen bg-gray-50">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<div className="flex-1 flex flex-col lg:ml-0 overflow-hidden">
				{/* Page Content */}
				<main className="flex-1 overflow-auto">{children}</main>
			</div>
		</div>
	);
}
