'use client';

import { CreditCard, Building, Zap } from 'lucide-react';
import { useState } from 'react';
import { useClient } from '@/contexts/ClientContext';

export default function BillingCard() {
	const [showPaymentMethod, setShowPaymentMethod] = useState(false);
	const { clientData } = useClient();

	// Format expiration date as next billing date
	const formatNextBillingDate = (expirationDate: string) => {
		return new Date(expirationDate).toLocaleDateString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});
	};

	// Detect card type based on first digit
	const detectCardType = (lastFour: string) => {
		const firstDigit = lastFour.charAt(0);
		switch (firstDigit) {
			case '4':
				return 'VISA';
			case '5':
				return 'MASTERCARD';
			case '6':
				return 'VERVE';
			default:
				return 'CARD';
		}
	};

	// Use payment data from client data or fallback to defaults
	const paymentData = {
		cardLastFour: clientData?.billing?.cardLastFour || '2876',
		cardName:
			clientData?.billing?.cardName || clientData?.name || 'William Dunchez',
		expDate: clientData?.billing?.expDate || '02/27',
		nextBillingDate: formatNextBillingDate(
			clientData?.expirationDate || '2024-12-31'
		),
		cardType: detectCardType(clientData?.billing?.cardLastFour || '2876'),
	};

	return (
		<div className="rounded-xl bg-white border border-gray-200 p-4 sm:p-5">
			<div className="flex flex-row sm:items-center justify-between gap-2 mb-4">
				<h3 className="font-semibold text-gray-900">Billing Summary</h3>
				<button
					onClick={() => setShowPaymentMethod(!showPaymentMethod)}
					className="text-sm text-purple-500 hover:text-purple-400 transition-colors text-left sm:text-right"
				>
					Change payment method
				</button>
			</div>

			<div className="flex items-center gap-3 mb-4">
				<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
					<CreditCard size={20} className="text-gray-500" />
				</div>
				<div className="min-w-0">
					<div className="flex flex-wrap items-center gap-2">
						<p className="font-medium text-gray-900">{paymentData.cardType}</p>
						<span className="text-xs text-emerald-500 bg-emerald-500/20 px-2 py-0.5 rounded">
							active card
						</span>
					</div>
					<p className="text-sm text-gray-400">**{paymentData.cardLastFour}</p>
				</div>
			</div>

			{/* Mobile Layout - Card name on top, dates side by side */}
			<div className="lg:hidden space-y-3">
				<div>
					<p className="text-xs text-gray-400">Card name</p>
					<p className="font-semibold text-gray-900">{paymentData.cardName}</p>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-xs text-gray-400">Exp date</p>
						<p className="font-semibold text-gray-900">{paymentData.expDate}</p>
					</div>
					<div>
						<p className="text-xs text-gray-400">Next billing date</p>
						<p className="font-semibold text-gray-900">
							{paymentData.nextBillingDate}
						</p>
					</div>
				</div>
			</div>

			{/* Desktop Layout - Original */}
			<div className="hidden lg:grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
				<div>
					<p className="text-xs text-gray-400">Card name</p>
					<p className="font-semibold text-gray-900">{paymentData.cardName}</p>
				</div>
				<div>
					<p className="text-xs text-gray-400">Exp date</p>
					<p className="font-semibold text-gray-900">{paymentData.expDate}</p>
				</div>
				<div>
					<p className="text-xs text-gray-400">Next billing date</p>
					<p className="font-semibold text-gray-900">
						{paymentData.nextBillingDate}
					</p>
				</div>
			</div>

			{showPaymentMethod && (
				<div className="mt-4 pt-4 border-t border-gray-200">
					<p className="text-sm text-gray-500 mb-3">Add new payment method</p>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
						<button className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors">
							<CreditCard size={16} />
							Add Card
						</button>
						<button className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors">
							<Building size={16} />
							Bank Transfer
						</button>
						<button className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors">
							<Zap size={16} />
							Flutterwave
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
