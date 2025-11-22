import React from 'react';

interface Plan {
	name: string;
	speed: string;
	devices: string;
	price: string;
	features: string[];
	popular?: boolean;
}

export default function PlansGrid() {
	const plans: Plan[] = [
		{
			name: 'Bronze',
			speed: '5 Mbps',
			devices: 'Up to 5 Devices',
			price: '₦13,922/mo',
			features: ['Unlimited data', '24/7 support'],
		},
		{
			name: 'Silver',
			speed: '10 Mbps',
			devices: 'Up to 10 Devices',
			price: '₦18,222/mo',
			features: ['Unlimited data', 'Priority support'],
			popular: true,
		},
		{
			name: 'Gold',
			speed: '20 Mbps',
			devices: 'Up to 20 Devices',
			price: '₦32,197/mo',
			features: ['Unlimited data', 'VIP support'],
		},
		{
			name: 'Platinum',
			speed: '50 Mbps',
			devices: 'Up to 50 Devices',
			price: '₦38,647/mo',
			features: ['Unlimited data', 'VVIP support'],
		},
	];

	const getGradientClass = (planName: string): string => {
		switch (planName) {
			case 'Bronze':
				return 'bg-gradient-to-r from-[#cd7f32] to-[#a97142]'; // Bronze shades
			case 'Silver':
				return 'bg-gradient-to-r from-gray-300 to-gray-900'; // Silver shades
			case 'Gold':
				return 'bg-gradient-to-r from-[#FFD700] to-yellow-900'; // Gold shades
			case 'Platinum':
				return 'bg-gradient-to-r from-[#e5e4e2] to-[#c0c0c0]'; // Platinum shades
			default:
				return 'bg-purple-600'; // fallback
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
			{plans.map((plan, index) => (
				<div
					key={index}
					className={`border rounded-lg p-6 md:p-4 ${
						plan.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'
					}`}
				>
					{plan.popular && (
						<div className="bg-purple-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold -mt-8 mb-4 mx-auto w-3/4">
							MOST POPULAR
						</div>
					)}
					<h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
					<p className="text-[14px] font-normal mb-4">{plan.devices}</p>
					<p className="text-4xl lg:text-2xl xl:text-4xl font-bold mb-2">
						{plan.price}
					</p>
					<p className="italic text-lg lg:text-base xl:text-base mb-6">
						{plan.speed} Download Speed
					</p>
					<ul className="space-y-2 mb-6">
						{plan.features.map((feature, i) => (
							<li key={i} className="flex items-center">
								<svg
									className="w-5 h-5 text-green-500 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								{feature}
							</li>
						))}
					</ul>
					<button
						className={`w-full text-white py-2 rounded hover:opacity-90 transition-all ${getGradientClass(
							plan.name
						)}`}
					>
						Select Package
					</button>
				</div>
			))}
		</div>
	);
}
