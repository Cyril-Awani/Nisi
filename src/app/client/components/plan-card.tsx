'use client';

import { Crown, Award, Star, Zap } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useClient } from '@/contexts/ClientContext';

export default function PlanCard() {
	const [showManage, setShowManage] = useState(false);
	const { clientData } = useClient();

	// Debug: Log client data to see what's being received
	console.log('Client Data in PlanCard:', clientData);

	// Calculate usage percentage based on days in current month
	const calculateUsagePercentage = useMemo(() => {
		const today = new Date();
		const currentMonth = today.getMonth();
		const currentYear = today.getFullYear();

		// Get days in current month
		const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

		// Get current day of month
		const currentDay = today.getDate();

		// Calculate percentage of month passed
		const percentage = Math.min(
			Math.round((currentDay / daysInMonth) * 100),
			100
		);

		return `${percentage}%`;
	}, []);

	// Nisi Subscription Plans data with respective icons
	const nisiPlans = {
		'Nisi Bronze': {
			speed: '5mbps',
			price: '₦13,922.00',
			data: 'Unlimited',
			icon: Award,
			color: 'text-amber-500',
			bgColor: 'bg-amber-50',
		},
		'Nisi Silver': {
			speed: '10mbps',
			price: '₦18,222.00',
			data: 'Unlimited',
			icon: Star,
			color: 'text-gray-400',
			bgColor: 'bg-gray-50',
		},
		'Nisi Gold': {
			speed: '20mbps',
			price: '₦32,197.00',
			data: 'Unlimited',
			icon: Crown,
			color: 'text-amber-400',
			bgColor: 'bg-amber-50',
		},
		'Nisi Platinum': {
			speed: '30mbps',
			price: '₦38,647.00',
			data: 'Unlimited',
			icon: Zap,
			color: 'text-blue-500',
			bgColor: 'bg-blue-50',
		},
	};

	const currentPlanData =
		nisiPlans[clientData?.subscription as keyof typeof nisiPlans] ||
		nisiPlans['Nisi Bronze'];

	const PlanIcon = currentPlanData.icon;

	return (
		<div className="rounded-xl bg-white border border-gray-200 p-4 sm:p-5">
			<div className="flex items-center justify-between mb-4">
				<h3 className="font-semibold text-gray-900">Your Plan</h3>
				<button
					onClick={() => setShowManage(!showManage)}
					className="text-sm text-purple-500 hover:text-purple-400 transition-colors"
				>
					Manage plan
				</button>
			</div>

			<div className="flex items-center gap-3 mb-4">
				<div
					className={`w-10 h-10 rounded-lg ${currentPlanData.bgColor} flex items-center justify-center`}
				>
					<PlanIcon size={20} className={currentPlanData.color} />
				</div>
				<div>
					<p className="font-medium text-gray-900">
						{clientData?.subscription || 'Nisi Bronze'}
					</p>
					<p className="text-sm text-gray-400">Monthly Subscription</p>
				</div>
			</div>

			{/* Mobile Layout - Speed and Price in one row */}
			<div className="lg:hidden space-y-3">
				<div>
					<p className="text-xs text-gray-400">Monthly progress</p>
					<p className="font-semibold text-gray-900">
						{calculateUsagePercentage}
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-xs text-gray-400">Download speed reaching</p>
						<p className="font-semibold text-gray-900">
							{currentPlanData.speed}
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-400">Price</p>
						<p className="font-semibold text-gray-900">
							{currentPlanData.price}
						</p>
					</div>
				</div>
			</div>

			{/* Desktop Layout - Original three columns */}
			<div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
				<div>
					<p className="text-xs text-gray-400">Monthly progress</p>
					<p className="font-semibold text-gray-900">
						{calculateUsagePercentage}
					</p>
				</div>
				<div>
					<p className="text-xs text-gray-400">Download Speed reaching</p>
					<p className="font-semibold text-gray-900">{currentPlanData.speed}</p>
				</div>
				<div>
					<p className="text-xs text-gray-400">Price</p>
					<p className="font-semibold text-gray-900">{currentPlanData.price}</p>
				</div>
			</div>

			{showManage && (
				<div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
					<button className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors">
						Upgrade Plan
					</button>
					<button className="w-full py-2 px-4 bg-gray-100 text-gray-600 rounded-lg text-sm hover:opacity-80 transition-opacity">
						Cancel Subscription
					</button>
				</div>
			)}
		</div>
	);
}
