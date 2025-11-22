'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import YearlyPlansModal from '@/components/PlansModal';

interface Plan {
	name: string;
	speed: string;
	devices: string;
	price: string;
	discount: number;
	features: string[];
	popular?: boolean;
	cta?: string;
	description?: string;
	annualPrice?: string;
}

export default function PlansPage() {
	const [showModal, setShowModal] = useState(false);
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const plans: Plan[] = [
		{
			name: 'Bronze',
			speed: '5 Mbps',
			devices: 'Up to 5 Devices',
			price: '₦13,922',
			discount: 0,
			features: ['Unlimited data', 'Free installation', '24/7 support'],
			description: 'Basic plan for light internet users',
		},
		{
			name: 'Silver',
			speed: '10 Mbps',
			devices: 'Up to 10 Devices',
			price: '₦18,222',
			discount: 0.05,
			features: ['Unlimited data', 'Free modem', 'Priority support'],
			popular: true,
			description: 'Best value for families',
		},
		{
			name: 'Gold',
			speed: '20 Mbps',
			devices: 'Up to 20 Devices',
			price: '₦32,197',
			discount: 0.05,
			features: ['Unlimited data', 'Free modem & router', 'VIP support'],
			description: 'For power users and small businesses',
		},
		{
			name: 'Platinum',
			speed: '50 Mbps',
			devices: 'Up to 50 Devices',
			price: '₦38,647',
			discount: 0.05,
			features: ['Unlimited data', 'Free modem & router', 'VVIP support'],
			description: 'Premium plan for heavy usage',
		},
	];

	const getAnnualPrice = (price: string, discount: number): string => {
		const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
		const annual = numericPrice * 12 * (1 - discount);
		return `₦${annual.toLocaleString('en-NG')}`;
	};

	const getDiscountMessage = (
		name: string,
		discount: number,
		annualPrice: string
	): string => {
		if (discount === 0) {
			return `*Pay per annum at ${annualPrice} / year `;
		}
		return `*Pay per annum at ${annualPrice} / year with ${Math.round(
			discount * 100
		)}% discount for ${name.toLowerCase()}`;
	};

	return (
		<div className="bg-white">
			<section className="relative bg-purple-900 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						className="text-4xl md:text-6xl font-bold mb-6"
					>
						Internet Plans &amp; Pricing
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						transition={{ delay: 0.2 }}
						className="text-xl max-w-3xl mx-auto"
					>
						Find the perfect plan for your home or business
					</motion.p>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">
							Exclusive Deals Just for You!
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							Take advantage of our limited-time offers designed to enhance your
							internet experience.
						</p>
					</motion.div>

					<div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl mx-auto">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:w-1/2"
						>
							<div className="relative h-64 lg:h-96 w-full rounded-lg overflow-hidden shadow-xl">
								<Image
									src="/images/offers/special-offer.jpg"
									alt="Special Internet Offer"
									fill
									className="object-cover"
									priority
								/>
								<div className="absolute inset-0 bg-purple-900 bg-opacity-30 flex items-center justify-center">
									<div className="text-center p-6">
										<h3 className="text-2xl font-bold mb-2">
											Limited Time Offer
										</h3>
										<p className="text-lg">
											Upgrade today and enjoy premium features
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="lg:w-1/2"
						>
							<div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center h-full">
								<div className="text-5xl font-bold text-purple-600 mb-2">
									15<span className="text-3xl">%</span>
								</div>
								<h3 className="text-2xl font-bold mb-2">Yearly Savings</h3>
								<p className="text-gray-600 mb-4">
									Save 15% when you pay annually instead of monthly
								</p>
								<ul className="text-left space-y-2 mb-6">
									{[
										'Lock in your rate for 12 months',
										'No price increases during your term',
										'Free premium router included',
									].map((item, index) => (
										<li key={index} className="flex items-start">
											<svg
												className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
											{item}
										</li>
									))}
								</ul>
								<button
									onClick={() => setShowModal(true)}
									className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
								>
									View Yearly Plans
								</button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Our Packages</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Our packages offer exceptional performance tailored to your needs
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{plans.map((plan, index) => {
							const annualPrice = getAnnualPrice(plan.price, plan.discount);
							const discountMessage = getDiscountMessage(
								plan.name,
								plan.discount,
								annualPrice
							);

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`border rounded-lg p-6 ${
										plan.popular
											? 'border-purple-500 shadow-xl relative'
											: 'border-gray-200'
									}`}
								>
									{plan.popular && (
										<div className="bg-purple-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold absolute -top-3 left-1/2 transform -translate-x-1/2">
											MOST POPULAR
										</div>
									)}
									<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
									<p className="text-gray-500 mb-4">
										{plan.speed} • {plan.devices}
									</p>
									<div className="mb-6">
										<span className="text-4xl font-bold">{plan.price}</span>
										<span className="text-gray-500 ">/month</span>
										<p className="text-sm text-gray-500 mt-1">
											{discountMessage}
										</p>
									</div>
									<div className="mb-6">
										<h4 className="font-semibold mb-2">
											What&apos;s Included?
										</h4>
										<ul className="space-y-2">
											{plan.features.map((feature, i) => (
												<li key={i} className="flex items-start">
													<svg
														className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
									</div>
									<Link
										href="/signup"
										className={`block text-center py-3 px-6 rounded-lg font-semibold ${
											plan.popular
												? 'bg-purple-600 text-white hover:bg-purple-700'
												: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
										} transition`}
									>
										Get Started
									</Link>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Add-Ons and Upgrades</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Enhance Your Internet Experience
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								name: 'Speed Boost',
								description:
									'Increase internet speed for 4K streaming, gaming, and smart devices.',
							},
							{
								name: 'Premium Wi-Fi Router',
								description:
									'Upgrade for stronger signal, wider coverage, and faster performance on all devices.',
							},
							{
								name: 'Advanced Protection',
								description:
									'Keep your network secure with firewall, VPN, and threat monitoring.',
							},
							{
								name: 'PowerBank',
								description:
									'Stay connected during outages with our high-capacity backup power solution.',
							},
							{
								name: 'Extended Support',
								description:
									'Get priority support with faster responses and extended service hours.',
							},
							{
								name: 'Wi-Fi Range Extender',
								description:
									'Expand Wi-Fi coverage to eliminate dead zones and ensure stable connections.',
							},
						].map((addon, index) => (
							<motion.div
								key={index}
								whileHover={{ y: -5 }}
								className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
							>
								<h3 className="text-xl font-bold mb-3">{addon.name}</h3>
								<p className="text-gray-600 mb-4">{addon.description}</p>
								<Link
									href="#"
									className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
								>
									Learn More
									<svg
										className="w-4 h-4 ml-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 bg-purple-800 text-white">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Join thousands of satisfied customers enjoying reliable,
							high-speed internet
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link
								href="/signup"
								className="bg-white text-purple-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-100 transition"
							>
								Sign Up Now
							</Link>
							<Link
								href="/contact"
								className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
							>
								Contact Sales
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			<YearlyPlansModal
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</div>
	);
}
