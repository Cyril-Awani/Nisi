'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

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
						About NISI Technologies
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						transition={{ delay: 0.2 }}
						className="text-xl max-w-3xl mx-auto"
					>
						Connecting communities with reliable, high-speed internet since 2015
					</motion.p>
				</div>
			</section>

			{/* Our Story */}
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
									src="/images/about/office.jpg"
									alt="NISI Office"
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
							<h2 className="text-3xl font-bold mb-6">Our Story</h2>
							<p className="text-gray-600 mb-4">
								Founded in 2015, NISI Technologies began with a simple mission:
								to bridge the digital divide in Delta State by providing
								affordable, reliable internet access. What started as a small
								local provider has grown into a regional leader in internet
								services.
							</p>
							<p className="text-gray-600 mb-6">
								Today, we serve thousands of homes and businesses across
								multiple locations, continually investing in our network
								infrastructure to deliver cutting-edge yet affordable
								connectivity solutions.
							</p>

							<Link
								href="/coverage"
								className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
							>
								Check Our Coverage
							</Link>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Mission and Values */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
							Our Mission & Values
						</motion.h2>
						<motion.p
							variants={fadeIn}
							className="text-gray-600 max-w-3xl mx-auto"
						>
							Guiding principles that drive our operations and customer
							relationships
						</motion.p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: 'Reliability First',
								description:
									'We maintain 99.9% network uptime through continuous infrastructure investments and proactive maintenance.',
							},
							{
								title: 'Community Focus',
								description:
									"As a locally-owned business, we're committed to the economic growth and digital inclusion of our communities.",
							},
							{
								title: 'Innovation Driven',
								description:
									'We constantly explore new technologies to deliver faster speeds and better service at competitive prices.',
							},
						].map((item, index) => (
							<motion.div
								key={index}
								variants={fadeIn}
								whileHover={{ y: -10 }}
								className="bg-white p-8 rounded-lg shadow-md text-center"
							>
								<h3 className="text-xl font-bold mb-3">{item.title}</h3>
								<p className="text-gray-600">{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
							Meet Our Leadership
						</motion.h2>
						<motion.p
							variants={fadeIn}
							className="text-gray-600 max-w-3xl mx-auto"
						>
							The passionate team driving NISI&apos;s vision forward
						</motion.p>
					</motion.div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								name: 'Odoro Erivo',
								role: 'CEO',
								image: '/images/team/david.jpg',
								bio: 'Telecommunications veteran with 15+ years experience in network infrastructure.',
							},
							{
								name: 'Elo',
								role: 'CFO',
								image: '/images/team/grace.jpg',
								bio: 'Heads our award-winning customer support team.',
							},
							{
								name: 'Grant',
								role: 'CTO',
								image: '/images/team/amina.jpg',
								bio: 'Leads our technical team with expertise in fiber optics and wireless technologies.',
							},
							{
								name: 'Udeme',
								role: 'Technical Operations Manager',
								image: '/images/team/james.jpg',
								bio: 'Ensures seamless service delivery across all our coverage areas.',
							},
							{
								name: 'Fejiro',
								role: 'Customer Experience',
								image: '/images/team/grace.jpg',
								bio: 'Heads our award-winning customer support team.',
							},
							{
								name: 'Ola',
								role: 'Sales and Marketing',
								image: '/images/team/grace.jpg',
								bio: 'Heads our award-winning customer support team.',
							},
						].map((member, index) => (
							<motion.div
								key={index}
								initial="hidden"
								whileInView="visible"
								variants={fadeIn}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden shadow-md">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold">{member.name}</h3>
								<p className="text-purple-600 mb-2">{member.role}</p>
								<p className="text-gray-600 text-sm">{member.bio}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-purple-800 text-white">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						variants={staggerContainer}
						viewport={{ once: true }}
					>
						<motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
							Ready to Experience NISI?
						</motion.h2>
						<motion.p
							variants={fadeIn}
							className="text-xl mb-8 max-w-3xl mx-auto"
						>
							Join thousands of satisfied customers enjoying reliable,
							high-speed internet
						</motion.p>
						<motion.div variants={fadeIn}>
							<Link
								href="/plans"
								className="inline-block bg-white text-purple-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-100 transition"
							>
								View Our Plans
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
