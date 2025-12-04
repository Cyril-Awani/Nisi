'use client';

import { useClient } from '@/contexts/ClientContext';

export default function UserProfile() {
	const { clientData } = useClient();

	// Format date function
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
	};

	return (
		<div className="w-full bg-white border-b border-gray-200 pt-20 lg:pt-6 p-4 sm:p-6 lg:pl-6">
			{/* Mobile Layout */}

			<div className="lg:hidden w-full">
				{/* BLOCK WRAPPER */}

				<div className="w-full flex flex-col gap-2">
					<div className="w-full flex items-center justify-between">
						<h1 className="text-3xl font-bold text-gray-900">
							{clientData?.name || 'William Dunchez'}
						</h1>

						<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-600 border border-emerald-500/30">
							Active
						</span>
					</div>
					{/* ROW 2 — USER ID + DATES */}
					<div className="w-full flex items-center justify-between">
						<p className="text-sm text-gray-500">
							ID: {clientData?.userId || clientData?.id || 'USER-001'}
						</p>

						<div className="flex items-center gap-2 text-sm text-gray-600">
							<span className="font-medium">
								{formatDate(clientData?.subscriptionStart || '2024-01-01')}
							</span>
							<span className="text-gray-400">-</span>
							<span className="font-medium">
								{formatDate(clientData?.expirationDate || '2024-12-31')}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout - Original */}
			<div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
				{/* Left - User Info */}
				<div className="flex flex-col">
					<div className="flex flex-wrap items-center gap-1 sm:gap-2">
						{/* User Name */}
						<h1 className="text-xl sm:text-2xl font-bold text-gray-900">
							{clientData?.name || 'William Dunchez'}
						</h1>
						{/* Status Badge */}
						<span className="inline-flex items-center mt-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-600 border border-emerald-500/30">
							Active
						</span>
					</div>
					{/* User ID under name */}
					<p className="text-sm text-gray-500 mt-1">
						ID: {clientData?.userId || clientData?.id || 'USER-001'}
					</p>
				</div>

				{/* Right - Timeline events */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8">
					<div className="flex items-center gap-3">
						<span className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium flex-shrink-0">
							01
						</span>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{formatDate(clientData?.subscriptionStart || '2024-01-01')}
							</p>
							<p className="text-xs text-gray-400">Subscription started</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<span className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium flex-shrink-0">
							02
						</span>
						<div>
							<p className="text-sm font-medium text-gray-900">
								{formatDate(clientData?.expirationDate || '2024-12-31')}
							</p>
							<p className="text-xs text-gray-400">Subscription expires</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
