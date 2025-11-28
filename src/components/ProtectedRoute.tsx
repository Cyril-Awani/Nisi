// components/ProtectedRoute.tsx
'use client';

import { useClient } from '@/contexts/ClientContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isLoggedIn, isLoading } = useClient();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isLoggedIn) {
			router.push('/');
		}
	}, [isLoggedIn, isLoading, router]);

	// Show loading spinner while checking authentication
	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading...</p>
				</div>
			</div>
		);
	}

	// Only render children if user is logged in
	if (!isLoggedIn) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-xl font-semibold text-gray-700">Access Denied</h2>
					<p className="text-gray-500">Please log in to access this page.</p>
				</div>
			</div>
		);
	}

	return <>{children}</>;
}
