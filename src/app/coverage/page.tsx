'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CoveragePage() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const locations = [
		'Okpaka',
		'PTI',
		'Osubi',
		'Alegbo',
		'Opete',
		'Airport Road',
		'Enheren',
		'Okumagba',
		'Jakpa Road',
		'Effurun',
		'Warri',
		'Udu',
		'Uvwie',
		'Asaba',
		'Ughelli',
	];

	const steps = [
		{
			number: '01',
			title: 'Check Coverage',
			description:
				'Enter your location to see if our high-speed internet service is available in your area.',
		},
		{
			number: '02',
			title: 'Survey Location',
			description:
				'Our team will visit your location to assess the best setup for optimal internet coverage',
		},
		{
			number: '03',
			title: 'Apply Contract',
			description:
				'Review and sign your service agreement to confirm your chosen plan details.',
		},
		{
			number: '04',
			title: 'Installation',
			description:
				'Our certified technicians will install the necessary equipment and quick setup',
		},
	];

	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="relative bg-purple-900 text-white py-20">
				<div className="container mx-auto px-4 text-center">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						className="text-4xl md:text-6xl font-bold mb-6"
					>
						Our Coverage
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						transition={{ delay: 0.2 }}
						className="text-xl max-w-3xl mx-auto"
					>
						Expanding Reliable Internet to Every Corner
					</motion.p>
				</div>
			</section>

			{/* Coverage Map Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
								<Image
									src="/images/coverage/map.jpg"
									alt="NISI Coverage Map"
									fill
									className="object-cover"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<h2 className="text-3xl font-bold mb-6">Locations We Serve</h2>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
								{locations.map((country, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.05 }}
										className="bg-gray-50 p-4 rounded-lg border border-gray-200"
									>
										<div className="flex items-center">
											<svg
												className="w-5 h-5 text-purple-600 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
												/>
											</svg>
											<span>{country}</span>
										</div>
									</motion.div>
								))}
							</div>
							<Link
								href="/signup"
								className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
							>
								Get Started
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Request Coverage Section */}
			<section id="request-coverage" className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<motion.div
							initial="hidden"
							whileInView="visible"
							variants={fadeIn}
							viewport={{ once: true }}
							className="text-center mb-12"
						>
							<h2 className="text-3xl font-bold mb-4">
								Can&apos;t Find Your Area?
							</h2>
							<p className="text-gray-600">
								If your area isn&apos;t listed, contact us to explore upcoming
								expansions or alternative solutions for connectivity.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-lg shadow-md"
						>
							<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-700 mb-2">Full name</label>
									<input
										type="text"
										placeholder="e.g. John Bull"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-2">Email</label>
									<input
										type="email"
										placeholder="e.g. example@email.com"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-2">Phone</label>
									<input
										type="tel"
										placeholder="e.g. +23 123 456 789"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-2">Location</label>
									<input
										type="text"
										placeholder="e.g. Somewhere, Delta State"
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
									/>
								</div>
								<div className="md:col-span-2">
									<label className="block text-gray-700 mb-2">Message</label>
									<textarea
										placeholder="Write your message or questions here"
										rows={4}
										className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
									></textarea>
								</div>
								<div className="md:col-span-2 flex items-center">
									<input
										type="checkbox"
										id="terms"
										className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
									/>
									<label htmlFor="terms" className="ml-2 text-gray-700">
										I have read and accepted terms and privacy
									</label>
								</div>
								<div className="md:col-span-2">
									<button
										type="submit"
										className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition w-full md:w-auto"
									>
										Request Coverage
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">How it Works</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Easy Steps to Get Connected
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-600"
							>
								<div className="text-purple-600 text-2xl font-bold mb-4">
									{step.number}
								</div>
								<h3 className="text-xl font-bold mb-3">{step.title}</h3>
								<p className="text-gray-600">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			{/* CTA Section */}
			<section className="py-16 bg-purple-800 text-white">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Check if NISI&apos;s high-speed internet is available in your
							location
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a
								href="#request-coverage"
								className="bg-white text-purple-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-100 transition"
							>
								Survey Request
							</a>
							<a
								href="https://wa.me/2347078583761"
								target="_blank"
								rel="noopener noreferrer"
								className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
							>
								Contact Sales
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
