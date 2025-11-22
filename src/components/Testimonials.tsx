'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
	{
		id: 1,
		name: 'Sarah Johnson',
		role: 'Small Business Owner',
		content:
			'NISI&apos;s internet service has transformed my business. The speeds are consistently fast and reliable, even during peak hours. Customer support is exceptional!',
		avatar: '/images/avatars/sarah.jpg',
		rating: 5,
	},
	{
		id: 2,
		name: 'Michael Adebayo',
		role: 'Remote Developer',
		content:
			'As a developer working from home, I need stable internet. NISI delivers with their uptime guarantee. Haven&apos;t experienced downtime in 6 months!',
		avatar: '/images/avatars/michael.jpg',
		rating: 4,
	},
	{
		id: 3,
		name: 'Grace Oluwaseun',
		role: 'University Student',
		content:
			'Perfect for online classes and streaming. The installation was quick and the technician was very professional. Highly recommend NISI!',
		avatar: '/images/avatars/grace.jpg',
		rating: 5,
	},
];

const starVariants = {
	hidden: { scale: 0 },
	visible: (i: number) => ({
		scale: 1,
		transition: {
			delay: i * 0.1,
			type: 'spring',
			stiffness: 300,
			damping: 10,
		},
	}),
};

const cardVariants = {
	offscreen: {
		y: 50,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

export default function Testimonials() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: '-100px' }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Hear from businesses and individuals who trust NISI for their
						internet needs
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<motion.div
							key={testimonial.id}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, margin: '-50px' }}
							variants={cardVariants}
							className="bg-white p-6 rounded-lg shadow-md"
						>
							<div className="flex items-center mb-4">
								<div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
									<Image
										src={testimonial.avatar || '/images/default-avatar.jpg'}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h4 className="font-semibold">{testimonial.name}</h4>
									<p className="text-gray-500 text-sm">{testimonial.role}</p>
								</div>
							</div>

							<div className="flex mb-4">
								{[...Array(5)].map((_, i) => (
									<motion.svg
										key={i}
										custom={i}
										initial="hidden"
										animate="visible"
										variants={starVariants}
										className={`w-5 h-5 ${
											i < testimonial.rating
												? 'text-yellow-400'
												: 'text-gray-300'
										}`}
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</motion.svg>
								))}
							</div>

							<p className="text-gray-700 mb-4">
								&ldquo;{testimonial.content}&rdquo;
							</p>

							<div className="flex justify-end cursor-progress">
								<motion.div
									animate={{ scale: [1, 1.2, 1] }}
									transition={{
										duration: 1.2,
										repeat: Infinity,
										repeatType: 'loop',
										ease: 'easeInOut',
									}}
									className="opacity-70 hover:opacity-100 transition-opacity"
								>
									<Image
										src="/images/nisi-logo.png"
										alt="NISI Logo"
										width={50}
										height={30}
									/>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
