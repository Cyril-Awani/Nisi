'use client';

import { useState, useEffect } from 'react';

interface Plan {
	name: string;
	price: number;
	hasDiscount: boolean;
}

interface Duration {
	months: number;
	label: string;
	discount: number;
}

interface YearlyPlansModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const plans: Plan[] = [
	{ name: 'Nisi Bronze', price: 13922, hasDiscount: false },
	{ name: 'Nisi Silver', price: 18222, hasDiscount: true },
	{ name: 'Nisi Gold', price: 32197, hasDiscount: true },
	{ name: 'Nisi Platinum', price: 38647, hasDiscount: true },
	{ name: 'Nisi Business', price: 50000, hasDiscount: true },
];

const durations: Duration[] = [
	{ months: 1, label: '1 Month', discount: 0 },
	{ months: 2, label: '2 Month', discount: 0 },
	{ months: 3, label: '3 Months (3% off)', discount: 3 },
	{ months: 4, label: '4 Months (3% off)', discount: 3 },
	{ months: 5, label: '5 Months (3% off)', discount: 3 },
	{ months: 6, label: '6 Months (4% off)', discount: 5 },
	{ months: 7, label: '7 Months (4% off)', discount: 5 },
	{ months: 8, label: '8 Months (4% off)', discount: 5 },
	{ months: 9, label: '9 Months (4% off)', discount: 5 },
	{ months: 10, label: '10 Months (5% off)', discount: 5 },
	{ months: 11, label: '11 Months (5% off)', discount: 5 },
	{ months: 12, label: '12 Months (5% off)', discount: 5 },
];

export default function YearlyPlansModal({
	isOpen,
	onClose,
}: YearlyPlansModalProps) {
	const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[0]);
	const [selectedDuration, setSelectedDuration] = useState<Duration>(
		durations[0]
	);
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const calculatePrice = (): number => {
		if (!selectedPlan.hasDiscount) {
			return selectedPlan.price * selectedDuration.months;
		}

		const discountMultiplier = (100 - selectedDuration.discount) / 100;
		return Math.round(
			selectedPlan.price * selectedDuration.months * discountMultiplier
		);
	};

	const formatPrice = (price: number): string => {
		return new Intl.NumberFormat('en-NG', {
			style: 'currency',
			currency: 'NGN',
		}).format(price);
	};

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen && isBrowser) {
			window.addEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'auto';
		};
	}, [isOpen, isBrowser, onClose]);

	if (!isOpen || !isBrowser) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
			onClick={handleBackdropClick}
		>
			<div className="w-full max-w-md rounded-lg bg-white shadow-xl overflow-hidden animate-fade-in">
				{/* Modal Header */}
				<div className="bg-purple-600 text-white p-4">
					<h2 className="text-xl font-bold">Yearly Plan Subscription</h2>
				</div>

				{/* Modal Body */}
				<div className="p-6 space-y-6">
					{/* Plan Selection */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Select Plan
						</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
							value={selectedPlan.name}
							onChange={(e) => {
								const plan = plans.find((p) => p.name === e.target.value);
								setSelectedPlan(plan || plans[0]);
							}}
						>
							{plans.map((plan) => (
								<option key={plan.name} value={plan.name}>
									{plan.name} ({formatPrice(plan.price)}/month)
								</option>
							))}
						</select>
					</div>

					{/* Duration Selection */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Select Duration
						</label>
						<select
							className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
							value={selectedDuration.months}
							onChange={(e) => {
								const duration = durations.find(
									(d) => d.months === Number(e.target.value)
								);
								setSelectedDuration(duration || durations[0]);
							}}
						>
							{durations.map((duration) => {
								const showLabel =
									selectedPlan.hasDiscount && duration.discount > 0
										? ` (${duration.discount}% off)`
										: '';
								return (
									<option key={duration.months} value={duration.months}>
										{duration.months} Month{duration.months > 1 ? 's' : ''}
										{showLabel}
									</option>
								);
							})}
						</select>
					</div>

					{/* Price Display */}
					<div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
						<h3 className="font-semibold text-gray-700 mb-2">Total Price</h3>
						<div className="flex items-baseline">
							<span className="text-2xl font-bold text-purple-600">
								{formatPrice(calculatePrice())}
							</span>
							{selectedDuration.months > 1 && selectedPlan.hasDiscount && (
								<span className="ml-3 text-sm text-gray-500 line-through">
									{formatPrice(selectedPlan.price * selectedDuration.months)}
								</span>
							)}
						</div>
						{selectedDuration.months > 1 && selectedPlan.hasDiscount && (
							<p className="text-sm text-green-600 mt-2">
								You save{' '}
								{formatPrice(
									selectedPlan.price * selectedDuration.months -
										calculatePrice()
								)}{' '}
								({selectedDuration.discount}% discount)
							</p>
						)}
					</div>
				</div>

				{/* Modal Footer */}
				<div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
					<button
						onClick={onClose}
						className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
					>
						Cancel
					</button>
					<button
						onClick={() => {
							alert(
								`Subscribed to ${selectedPlan.name} plan for ${selectedDuration.months} months!`
							);
							onClose();
						}}
						className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-md transition"
					>
						Subscribe Now
					</button>
				</div>
			</div>
		</div>
	);
}
