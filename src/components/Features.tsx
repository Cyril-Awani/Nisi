import React from 'react';

const features = [
	{
		title: 'Fast Speeds',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		title: 'Free Installation',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
				/>
			</svg>
		),
	},
	{
		title: 'Uptime Guarantee',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: '24/7 Support',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-12 w-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		),
	},
];

export default function FeaturesGrid() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center p-8 hover:bg-gray-50 rounded-lg transition-all duration-300 group"
						>
							<div className="text-purple-600 mb-4 group-hover:text-purple-800 transition-colors">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold mb-3">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
