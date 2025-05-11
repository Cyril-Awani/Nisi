'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SupportPage() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const features = [
		'Reaching upto 100 Mbps Download Speed',
		'Unlimited Data Usage',
		'24/7 Technical Support',
		'Timely Setup',
	];

	const whyChooseUs = [
		{
			title: 'Lightning-fast internet for every need',
			description:
				'Enjoy smooth streaming, gaming, and browsing with high-speed connections designed for modern demands.',
		},
		{
			title: 'Flexible options to fit any budget',
			description:
				'Access competitive pricing with packages tailored for homes, businesses, and heavy internet users.',
		},
		{
			title: 'Protection for your data and devices',
			description:
				'Safeguard your online activities with built-in network security and protection from cyber threats.',
		},
		{
			title: 'Expert help anytime you need it',
			description:
				'Receive round-the-clock assistance from our friendly support team for troubleshooting and inquiries.',
		},
	];

	const products = ['Router', 'Modem', 'Mobile Router', 'Portable Modem'];

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
						High-Speed Internet, Anytime, Anywhere
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						transition={{ delay: 0.2 }}
						className="text-xl max-w-3xl mx-auto"
					>
						Nisi Technologies delivers fast, reliable internet with flexible
						packages and 24/7 support, ensuring seamless connectivity.
					</motion.p>
				</div>
			</section>

			{/* Features Section - Image Left */}
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
									src="/images/support/42317.jpg"
									alt="High-Speed Internet Features"
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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
								{features.map((feature, index) => (
									<div
										key={index}
										className="flex items-start bg-gray-50 p-4 rounded-lg"
									>
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
											></path>
										</svg>
										<span>{feature}</span>
									</div>
								))}
							</div>

							<div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
								<h3 className="text-3xl font-bold text-purple-600 mb-2">
									99.9<span className="text-2xl">%</span>
								</h3>
								<h4 className="text-xl font-semibold mb-2">Uptime Guarantee</h4>
								<p className="text-gray-600">
									Our network reliability ensures you stay connected when it
									matters most
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Products Section - Image Right */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-4xl font-bold mb-4">Our Products</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							High-Speed Internet Solutions for Every Need
						</p>
					</motion.div>

					<div className="flex flex-col lg:flex-row-reverse items-center gap-12">
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
								<Image
									src="/images/support/42735.jpg"
									alt="Netlink Products"
									fill
									className="object-cover"
								/>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<div className="grid grid-cols-2 md:grid-cols-2 gap-6">
								{products.map((product, index) => (
									<motion.div
										key={index}
										whileHover={{ y: -5 }}
										className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200"
									>
										<div className="text-purple-600 text-3xl mb-3">
											{product === 'Router' && '📶'}
											{product === 'Modem' && '🖥️'}
											{product === 'Mobile Router' && '📱'}
											{product === 'Portable Modem' && '💼'}
										</div>
										<h3 className="text-xl font-bold">{product}</h3>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section - Image Left */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Discover why Nisi Technologies is the best solution
						</p>
					</motion.div>

					<div className="flex flex-col lg:flex-row items-center gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="lg:w-1/2"
						>
							<div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
								<Image
									src="/images/support/6.jpg"
									alt="Why Choose Nisi Technologies"
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
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
							<div className="space-y-6">
								{whyChooseUs.map((item, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: index * 0.1 }}
										viewport={{ once: true }}
										className="p-6 bg-gray-50 rounded-lg"
									>
										<h3 className="text-xl font-bold mb-2">{item.title}</h3>
										<p className="text-gray-600">{item.description}</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Support CTA Section */}
			<section className="py-16 bg-purple-800 text-white">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={fadeIn}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold mb-6">
							Need Immediate Assistance?
						</h2>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Our support team is available 24/7 to help with any issues or
							questions
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link
								href="/contact"
								className="bg-white text-purple-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-100 transition"
							>
								Contact Support
							</Link>
							<Link
								href="/faq"
								className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
							>
								Visit FAQ
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
