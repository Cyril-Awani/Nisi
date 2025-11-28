'use client';

import { useState, useEffect } from 'react';
import { useClient } from '@/contexts/ClientContext';
import {
	CreditCard,
	Download,
	FileText,
	CheckCircle,
	Clock,
	AlertCircle,
	Building,
	Zap,
	Battery,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BillingPage() {
	const { clientData } = useClient();
	const [showPaymentMethods, setShowPaymentMethods] = useState(false);
	const [currentAdIndex, setCurrentAdIndex] = useState(0);

	// Sample ads data for the carousel
	const ads = [
		{
			id: 1,
			title: 'Powerbank Extender Pro',
			subtitle: 'Boost Your Power!',
			description:
				'Never run out of battery again! Get 72 hours of additional power backup for all your devices.',
			price: '₦8,999',
			originalPrice: '₦12,999',
			discount: '-30% OFF',
			icon: Battery,
			theme: 'from-orange-500 to-red-500',
			features: [
				{ icon: Zap, text: 'Fast charging - 0 to 100% in 2 hours' },
				{ icon: Battery, text: 'Multiple device support (up to 3 devices)' },
				{ icon: CheckCircle, text: 'Portable & lightweight design' },
			],
		},
		{
			id: 2,
			title: 'Solar Charger Plus',
			subtitle: 'Go Green & Save!',
			description:
				'Harness solar energy with our premium solar charger. Perfect for outdoor adventures and emergency backup.',
			price: '₦12,499',
			originalPrice: '₦16,999',
			discount: '-25% OFF',
			icon: Zap,
			theme: 'from-emerald-500 to-blue-500',
			features: [
				{ icon: Zap, text: 'Solar-powered charging' },
				{ icon: CheckCircle, text: 'Weather-resistant design' },
				{ icon: Battery, text: 'Built-in 20,000mAh battery' },
			],
		},
		{
			id: 3,
			title: 'Smart Power Strip',
			subtitle: 'Control Remotely!',
			description:
				'Smart Wi-Fi enabled power strip with individual outlet control and energy monitoring.',
			price: '₦6,799',
			originalPrice: '₦9,999',
			discount: '-32% OFF',
			icon: Zap,
			theme: 'from-purple-500 to-pink-500',
			features: [
				{ icon: CheckCircle, text: 'Wi-Fi enabled remote control' },
				{ icon: Zap, text: 'Energy usage monitoring' },
				{ icon: Battery, text: '4 smart outlets + 2 USB ports' },
			],
		},
	];

	// Auto-rotate ads every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentAdIndex((current) => (current + 1) % ads.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [ads.length]);

	// Get billing data from clientData with fallbacks
	const billingData = {
		currentPlan: {
			name: clientData?.clientInfo?.subscription || 'Nisi Gold',
			price: clientData?.clientInfo?.price || '₦32,197.00',
			billingCycle: 'Monthly',
			nextBillingDate: clientData?.clientInfo?.expirationDate || '2024-02-15',
			status: clientData?.clientInfo?.billing?.status || 'active',
		},
		paymentMethod: {
			type: 'VISA',
			lastFour: clientData?.clientInfo?.billing?.cardLastFour || '2876',
			expiry: clientData?.clientInfo?.billing?.expDate || '02/27',
			name:
				clientData?.clientInfo?.billing?.cardName ||
				clientData?.clientInfo?.name ||
				'William Dunchez',
		},
		billingHistory: [
			{
				id: 'INV-001',
				date: '2024-01-15',
				amount: clientData?.clientInfo?.price || '₦32,197.00',
				status: 'pending' as const,
				plan: clientData?.clientInfo?.subscription || 'Nisi Gold',
				downloadUrl: '#',
			},
			{
				id: 'INV-002',
				date: '2023-12-15',
				amount: clientData?.clientInfo?.price || '₦32,197.00',
				status: 'overdue' as const,
				plan: clientData?.clientInfo?.subscription || 'Nisi Gold',
				downloadUrl: '#',
			},
			{
				id: 'INV-003',
				date: '2023-11-15',
				amount: clientData?.clientInfo?.price || '₦32,197.00',
				status: 'paid' as const,
				plan: clientData?.clientInfo?.subscription || 'Nisi Gold',
				downloadUrl: '#',
			},
		],
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case 'paid':
				return <CheckCircle size={16} className="text-gray-500" />;
			case 'pending':
				return <Clock size={16} className="text-yellow-500" />;
			case 'overdue':
				return <AlertCircle size={16} className="text-red-500" />;
			default:
				return <Clock size={16} className="text-gray-500" />;
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case 'paid':
				return 'bg-gray-100 text-green-800';
			case 'pending':
				return 'bg-yellow-100 text-yellow-800';
			case 'overdue':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};

	const currentAd = ads[currentAdIndex];
	const IconComponent = currentAd.icon;

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white border-b border-gray-200 px-6 py-6 pt-20 md:pt-6">
				<h1 className="text-3xl md:text-xl font-bold text-gray-900">
					Billing & Payments
				</h1>
				<p className="text-xs text-gray-600 mt-1">
					Manage your subscription and payment methods
				</p>
			</div>

			<div className="p-2">
				{/* Top Section - Current Plan, Payment Method, and Add-ons */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-2">
					{/* Current Plan & Payment Method */}
					<div className="lg:col-span-2 space-y-2">
						{/* Current Plan Card */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<div className="flex items-center justify-between mb-6">
								<h2 className="text-lg font-semibold text-gray-900">
									Current Plan
								</h2>
								<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
									{billingData.currentPlan.status === 'active'
										? 'Active'
										: 'Inactive'}
								</span>
							</div>

							<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
								<div>
									<p className="text-sm text-gray-500">Plan Name</p>
									<p className="text-lg font-semibold text-gray-900">
										{billingData.currentPlan.name}
									</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Monthly Price</p>
									<p className="text-lg font-semibold text-gray-900">
										{billingData.currentPlan.price}
									</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Billing Cycle</p>
									<p className="text-lg font-medium text-gray-900">
										{billingData.currentPlan.billingCycle}
									</p>
								</div>
								<div>
									<p className="text-sm text-gray-500">Next Billing Date</p>
									<p className="text-lg font-medium text-gray-900">
										{billingData.currentPlan.nextBillingDate}
									</p>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-3 mb-4">
								<button className="flex-1 bg-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors">
									Upgrade Plan
								</button>
								<button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
									Suspend Subscription
								</button>
							</div>

							{/* Contact Support Link */}
							<div className="pt-4 border-t border-gray-200">
								<p className="text-sm text-gray-600 mb-2">
									Need help with billing?{' '}
									<a
										href="/support"
										className="text-purple-500 hover:text-purple-600 font-medium underline"
									>
										Contact our support team
									</a>{' '}
									for any questions or issues.
								</p>
							</div>
						</div>

						{/* Payment Method Card */}
						<div className="bg-white rounded-xl border border-gray-200 px-6 py-2">
							<div className="flex items-center justify-between mb-2">
								<h2 className="text-lg font-semibold text-gray-900">
									Payment Method
								</h2>
								<button
									onClick={() => setShowPaymentMethods(!showPaymentMethods)}
									className="text-purple-600 hover:text-purple-500 font-medium"
								>
									{showPaymentMethods ? 'Cancel' : 'Change'}
								</button>
							</div>

							{!showPaymentMethods ? (
								<div className="flex items-center justify-between p-2 rounded-lg">
									<div className="flex items-center gap-4">
										<div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
											<CreditCard size={20} className="text-white" />
										</div>
										<div>
											<p className="font-medium text-gray-900">
												{billingData.paymentMethod.type} ••••{' '}
												{billingData.paymentMethod.lastFour}
											</p>
											<p className="text-sm text-gray-500">
												Expires {billingData.paymentMethod.expiry} •{' '}
												{billingData.paymentMethod.name}
											</p>
										</div>
									</div>
									<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800">
										Primary
									</span>
								</div>
							) : (
								<div className="space-y-4">
									<p className="text-gray-600">Add new payment method:</p>
									<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
										<button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
											<CreditCard size={24} className="text-gray-400 mb-2" />
											<span className="text-sm font-medium">Credit Card</span>
										</button>
										<button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
											<Building size={24} className="text-gray-400 mb-2" />
											<span className="text-sm font-medium">Bank Transfer</span>
										</button>
										<button className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-500 transition-colors">
											<Zap size={24} className="text-gray-400 mb-2" />
											<span className="text-sm font-medium">Flutterwave</span>
										</button>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Right Column - Ads Carousel */}
					<div className="relative h-fit">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentAd.id}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.5 }}
								className={`bg-gradient-to-br ${currentAd.theme} rounded-xl border border-orange-200 p-6 text-white h-full`}
							>
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-white/20 rounded-lg">
										<IconComponent size={24} className="text-white" />
									</div>
									<h2 className="text-lg font-bold">{currentAd.subtitle}</h2>
								</div>

								<h3 className="text-xl font-bold mb-2">{currentAd.title}</h3>
								<p className="text-white/90 mb-4 text-sm">
									{currentAd.description}
								</p>

								<div className="space-y-3 mb-4">
									{currentAd.features.map((feature, index) => (
										<div key={index} className="flex items-center gap-2">
											<feature.icon size={16} className="text-yellow-300" />
											<span className="text-sm">{feature.text}</span>
										</div>
									))}
								</div>

								<div className="flex items-end justify-between mb-4">
									<div>
										<p className="text-white/80 text-sm">Only</p>
										<p className="text-2xl font-bold">{currentAd.price}</p>
										<p className="text-white/80 text-xs line-through">
											{currentAd.originalPrice}
										</p>
									</div>
									<div className="bg-yellow-400 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
										{currentAd.discount}
									</div>
								</div>

								<button className="w-full bg-white text-orange-600 py-3 px-4 rounded-lg font-bold hover:bg-orange-50 transition-colors">
									Buy Now
								</button>
							</motion.div>
						</AnimatePresence>

						{/* Carousel Indicators */}
						<div className="flex justify-center mt-4 space-x-2">
							{ads.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentAdIndex(index)}
									className={`w-2 h-2 rounded-full transition-all ${
										index === currentAdIndex ? 'bg-white' : 'bg-white/50'
									}`}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Billing History - Full Width */}
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-lg font-semibold text-gray-900 mb-6">
						Billing History
					</h2>

					{/* Desktop Table */}
					<div className="hidden md:block overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b border-gray-200">
									<th className="text-left py-3 text-sm font-medium text-gray-500">
										Invoice ID
									</th>
									<th className="text-left py-3 text-sm font-medium text-gray-500">
										Date
									</th>
									<th className="text-left py-3 text-sm font-medium text-gray-500">
										Plan
									</th>
									<th className="text-left py-3 text-sm font-medium text-gray-500">
										Amount
									</th>
									<th className="text-left py-3 text-sm font-medium text-gray-500">
										Status
									</th>
									<th className="text-left py-3 text-sm font-medium text-gray-500">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{billingData.billingHistory.map((invoice) => (
									<tr
										key={invoice.id}
										className="border-b border-gray-100 hover:bg-gray-50"
									>
										<td className="py-4">
											<div className="flex items-center gap-2">
												<FileText size={16} className="text-gray-400" />
												<span className="font-medium text-gray-900">
													{invoice.id}
												</span>
											</div>
										</td>
										<td className="py-4 text-gray-600">{invoice.date}</td>
										<td className="py-4 text-gray-600">{invoice.plan}</td>
										<td className="py-4 font-medium text-gray-900">
											{invoice.amount}
										</td>
										<td className="py-4">
											<span
												className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
													invoice.status
												)}`}
											>
												{getStatusIcon(invoice.status)}
												{invoice.status.charAt(0).toUpperCase() +
													invoice.status.slice(1)}
											</span>
										</td>
										<td className="py-4">
											<button className="flex items-center gap-1 text-purple-500 hover:text-purple-600 font-medium">
												<Download size={16} />
												Download
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Mobile List */}
					<div className="md:hidden space-y-4">
						{billingData.billingHistory.map((invoice) => (
							<div
								key={invoice.id}
								className="border border-gray-200 rounded-lg p-4"
							>
								<div className="flex justify-between items-start mb-3">
									<div className="flex items-center gap-2">
										<FileText size={16} className="text-gray-400" />
										<span className="font-medium text-gray-900">
											{invoice.id}
										</span>
									</div>
									<span
										className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
											invoice.status
										)}`}
									>
										{getStatusIcon(invoice.status)}
										{invoice.status.charAt(0).toUpperCase() +
											invoice.status.slice(1)}
									</span>
								</div>

								<div className="grid grid-cols-2 gap-4 text-sm mb-3">
									<div>
										<p className="text-gray-500">Date</p>
										<p className="font-medium">{invoice.date}</p>
									</div>
									<div>
										<p className="text-gray-500">Plan</p>
										<p className="font-medium">{invoice.plan}</p>
									</div>
									<div>
										<p className="text-gray-500">Amount</p>
										<p className="font-medium">{invoice.amount}</p>
									</div>
								</div>

								<button className="w-full flex items-center justify-center gap-2 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-50 transition-colors">
									<Download size={16} />
									Download Invoice
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
