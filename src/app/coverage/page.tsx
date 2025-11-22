'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
	ssr: false,
	loading: () => <p className="text-center py-10">Loading map…</p>,
});

export default function CoveragePage() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
			description: 'Enter your location to see if our service is available.',
		},
		{
			number: '02',
			title: 'Survey Location',
			description: 'We inspect your location to determine ideal setup.',
		},
		{
			number: '03',
			title: 'Apply Contract',
			description: 'Sign your agreement and plan details.',
		},
		{
			number: '04',
			title: 'Installation',
			description: 'Our technicians install and set up your equipment.',
		},
	];

	return (
		<div className="bg-white">
			{/* HERO */}
			<section className="relative bg-purple-900 text-white py-4">
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

			{/* MAP SECTION */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="flex flex-col lg:flex-row items-center gap-12">
						{/* Map */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2 w-full"
						>
							<div className="relative h-[50vh] lg:h-[80vh] w-full rounded-lg overflow-hidden shadow-xl">
								<LeafletMap />
							</div>
						</motion.div>

						{/* Locations List */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<h2 className="text-3xl font-bold mb-6">Locations We Serve</h2>

							<div className="grid grid-cols-3 gap-4 mb-8">
								{locations.map((location, index) => (
									<motion.div
										key={index}
										whileHover={{ scale: 1.05 }}
										className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-2"
									>
										<svg
											className="w-5 h-5 text-purple-600"
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
										<span>{location}</span>
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

			{/* HOW IT WORKS */}
			<section className="py-2">
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

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

			{/* CTA */}
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
							area.
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
