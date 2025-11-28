'use client';

import { Signal, MapPin, AlertTriangle, Wifi } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useClient } from '@/contexts/ClientContext';

export default function NetworkCard() {
	const [showReport, setShowReport] = useState(false);
	const [reported, setReported] = useState(false);
	const { clientData } = useClient();

	const handleReport = () => {
		setReported(true);
		setTimeout(() => {
			setShowReport(false);
			setReported(false);
		}, 2000);
	};

	// Check if subscription is active based on current date - FIXED
	const isSubscriptionActive = useMemo(() => {
		if (!clientData?.expirationDate) return true; // Default to active if no date

		const today = new Date();
		const expirationDate = new Date(clientData.expirationDate);

		// Reset time part to compare only dates
		today.setHours(0, 0, 0, 0);
		expirationDate.setHours(0, 0, 0, 0);

		return today <= expirationDate;
	}, [clientData?.expirationDate]);

	// Debug: Log the dates to see what's happening
	console.log('Expiration Date:', clientData?.expirationDate);
	console.log('Today:', new Date().toISOString().split('T')[0]);
	console.log('Is Active:', isSubscriptionActive);

	// Get signal strength label based on dBm value
	const getSignalStrength = (dBm: number) => {
		if (dBm >= -30) return { label: 'Excellent', color: 'text-emerald-500' };
		if (dBm >= -50) return { label: 'Very Good', color: 'text-emerald-400' };
		if (dBm >= -60) return { label: 'Good', color: 'text-green-500' };
		if (dBm >= -67) return { label: 'Fair', color: 'text-yellow-500' };
		if (dBm >= -70) return { label: 'Poor', color: 'text-orange-500' };
		return { label: 'Very Poor', color: 'text-red-500' };
	};

	const networkData = {
		macId: clientData?.network?.macId || '00:1B:44:11:3A:B7',
		signalStrength: clientData?.network?.signalStrength || -45,
		location: clientData?.network?.location || 'Lagos, Nigeria',
		status: isSubscriptionActive ? 'Active' : 'Inactive',
		statusColor: isSubscriptionActive ? 'text-emerald-500' : 'text-red-500',
	};

	const signalInfo = getSignalStrength(networkData.signalStrength);

	return (
		<div className="rounded-xl bg-white border border-gray-200 p-4 sm:p-5">
			<div className="flex flex-row sm:items-center justify-between gap-2 mb-4">
				<h3 className="font-semibold text-gray-900">Your Network</h3>
				<button
					onClick={() => setShowReport(!showReport)}
					className="text-sm text-emerald-500 hover:text-emerald-400 transition-colors text-left sm:text-right"
				>
					Report network issue
				</button>
			</div>

			<div className="flex items-center gap-3 mb-4">
				<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
					<Wifi size={20} className="text-emerald-500" />
				</div>
				<div>
					<p className="font-medium text-gray-900">{networkData.macId}</p>
					<p className={`text-sm ${networkData.statusColor}`}>
						{networkData.status}
					</p>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
				<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
					<Signal size={14} className="text-emerald-500 flex-shrink-0" />
					<span className="text-sm text-gray-600">Signal strength:</span>
					<span className={`text-sm font-medium ${signalInfo.color}`}>
						{networkData.signalStrength} dBm ({signalInfo.label})
					</span>
				</div>
				<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
					<MapPin size={14} className="text-gray-400 flex-shrink-0" />
					<span className="text-sm text-gray-600">{networkData.location}</span>
				</div>
			</div>

			{showReport && (
				<div className="mt-4 pt-4 border-t border-gray-200">
					{reported ? (
						<div className="flex items-center gap-2 text-emerald-500">
							<span className="text-sm">Issue reported successfully!</span>
						</div>
					) : (
						<>
							<p className="text-sm text-gray-500 mb-3">
								What issue are you experiencing?
							</p>
							<div className="flex gap-2 flex-wrap">
								<button
									onClick={handleReport}
									className="py-2 px-3 bg-gray-100 rounded-lg text-sm text-gray-600 hover:opacity-80 transition-opacity flex items-center gap-1"
								>
									<AlertTriangle size={14} />
									Slow Speed
								</button>
								<button
									onClick={handleReport}
									className="py-2 px-3 bg-gray-100 rounded-lg text-sm text-gray-600 hover:opacity-80 transition-opacity"
								>
									No Connection
								</button>
								<button
									onClick={handleReport}
									className="py-2 px-3 bg-gray-100 rounded-lg text-sm text-gray-600 hover:opacity-80 transition-opacity"
								>
									Intermittent
								</button>
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}
