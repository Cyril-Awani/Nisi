'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FAQPage() {
	const [activeCategory, setActiveCategory] = useState('billing');
	const [openQuestion, setOpenQuestion] = useState<string | null>(null);

	const toggleQuestion = (id: string) => {
		setOpenQuestion(openQuestion === id ? null : id);
	};

	const categories = {
		billing: {
			title: 'Billing',
			questions: [
				{
					id: 'billing-1',
					question: 'How Can I View My Billing Date?',
					answer:
						'You can view your billing date by logging into your customer portal. The billing date is displayed on your dashboard under "Account Overview".',
				},
				{
					id: 'billing-2',
					question: 'What Payment Methods Do You Accept?',
					answer:
						'We accept various payment methods including credit/debit cards, bank transfers, Flutterwave, and mobile money.',
				},
				{
					id: 'billing-3',
					question: 'How Do I Use Flutterwave?',
					answer:
						"To pay via Flutterwave: 1) Select Flutterwave as payment method, 2) Enter your payment details, 3) Complete the transaction. You'll receive a payment confirmation email.",
				},
				{
					id: 'billing-4',
					question: 'How can I make a payment via bank transfer?',
					answer:
						'Make transfer to: Bank: Zenith Bank | Account Name: Nisi Technologies Ltd | Account Number: 1234567890. Use your account number as reference.',
				},
				{
					id: 'billing-5',
					question: 'How Can I View My Page as a Customer?',
					answer:
						'Visit our website and click "Customer Login" at the top right. Enter your credentials to access your dashboard.',
				},
			],
		},
		technical: {
			title: 'Technical Support',
			questions: [
				{
					id: 'tech-1',
					question: 'What should I do if my internet connection is slow?',
					answer:
						'1) Restart your router, 2) Check for background downloads, 3) Move closer to the router, 4) Contact support if issue persists.',
				},
				{
					id: 'tech-2',
					question:
						'What should I do if the light on my router is flashing red?',
					answer:
						'A red light indicates connection issues. Try power cycling your router. If problem continues, contact our technical support.',
				},
				{
					id: 'tech-3',
					question: 'What Can I Do If I Mistakenly Reset My Router?',
					answer:
						"You'll need to reconfigure your WiFi settings. Contact support for assistance with router configuration.",
				},
				{
					id: 'tech-4',
					question:
						'What Should I Do If My Router Is Showing Two Green Lights But Not Working?',
					answer:
						'This usually indicates a signal issue. Check all cable connections and restart your devices. If unresolved, contact support.',
				},
				{
					id: 'tech-5',
					question:
						"What Happens If My Router Is Showing One Green and One Red Light blinking and It's Unstable?",
					answer:
						'This indicates signal problems. Ensure cables are properly connected and there are no obstructions near your router.',
				},
				{
					id: 'tech-6',
					question:
						"What Can I Do If My Router Doesn't Show Two Lights But Cables Are Properly Plugged?",
					answer:
						'Try a different power outlet. If still not working, the router may need replacement. Contact our support team.',
				},
				{
					id: 'tech-7',
					question: 'What Can I Do If My POE Is Not Showing Light?',
					answer:
						'Check power source and cables. If no light after checking connections, the POE may be faulty and need replacement.',
				},
				{
					id: 'tech-8',
					question:
						'What Should I Do If the Light on My CPE Device Stops Showing?',
					answer:
						'This indicates power or connection loss. Check power supply and cables. Contact support if issue persists.',
				},
				{
					id: 'tech-9',
					question: 'How Can I Change My Password?',
					answer:
						'Log into your customer portal, go to "Account Settings", and select "Change Password". Follow the prompts to update.',
				},
			],
		},
		services: {
			title: 'Services We Offer',
			questions: [
				{
					id: 'service-1',
					question: 'What Services Do You Offer?',
					answer:
						'We provide high-speed internet services for residential and business customers, including WiFi solutions and technical support.',
				},
				{
					id: 'service-2',
					question: 'What Packages Do You Offer?',
					answer:
						'We offer various packages from Bronze (5Mbps) to Platinum (50Mbps) with different features and pricing.',
				},
				{
					id: 'service-3',
					question: 'Can I Upgrade My Current Plan?',
					answer:
						'Yes, you can upgrade anytime through your customer portal or by contacting our support team.',
				},
			],
		},
		installation: {
			title: 'Installation',
			questions: [
				{
					id: 'install-1',
					question: 'If I Pay Now, When Will I Get My Kits Installed?',
					answer:
						'Installation is typically scheduled within 2-5 working days after payment verification.',
				},
				{
					id: 'install-2',
					question: 'What Comes With a New Installation?',
					answer:
						'All installations basically include a router, an outoor Radio, a Pole and 40m CAT5/Cat6 cables. Higher packages may include additional equipment.',
				},
				{
					id: 'install-3',
					question: 'Does a Power Bank Come With It?',
					answer:
						'Power banks are available as optional add-ons for an additional fee.',
				},
				{
					id: 'install-4',
					question: 'Do You Offer Professional Installation?',
					answer:
						'Yes, all our installations are performed by certified technicians.',
				},
				{
					id: 'install-5',
					question: 'Can I Pay in Installments?',
					answer:
						"We currently don't offer installment plans for equipment, but you can pay monthly for your internet service.",
				},
			],
		},
		general: {
			title: 'General Information',
			questions: [
				{
					id: 'gen-1',
					question: 'What Is Your Customer Service Contact Information?',
					answer:
						'Call: +234 707 858 3761 | WhatsApp: +234 707 858 3761 | Email: support@nisitech.com',
				},
				{
					id: 'gen-2',
					question: 'Do you have any referral programs?',
					answer:
						'Yes! Refer a friend and get 10% off your next bill when they sign up. See details in your customer portal.',
				},
				{
					id: 'gen-3',
					question: 'What Are Your Customer Service Hours?',
					answer: 'Monday-Friday: 8AM-6PM | Saturday: 9AM-4PM | Sunday: Closed',
				},
				{
					id: 'gen-4',
					question: 'What Are Your Social Media Channels?',
					answer:
						'Follow us on Twitter @NisiTech, Instagram @NisiTech, and Facebook at facebook.com/NisiTech',
				},
			],
		},
	};

	return (
		<div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div className="text-center mb-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">
					Frequently Asked Questions
				</h1>
				<p className="text-lg text-gray-600">
					Find answers to common questions about our services
				</p>
			</div>

			<div className="flex flex-col md:flex-row gap-8">
				<div className="md:w-1/4">
					<div className="sticky top-4 space-y-2">
						{Object.entries(categories).map(([key, category]) => (
							<button
								key={key}
								onClick={() => setActiveCategory(key)}
								className={`w-full text-left px-4 py-3 rounded-lg transition ${
									activeCategory === key
										? 'bg-purple-600 text-white'
										: 'bg-gray-100 hover:bg-gray-200'
								}`}
							>
								{category.title}
							</button>
						))}
					</div>
				</div>

				<div className="md:w-3/4">
					<motion.div
						key={activeCategory}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						className="space-y-4"
					>
						<h2 className="text-2xl font-bold text-gray-800 mb-6">
							{categories[activeCategory as keyof typeof categories].title}
						</h2>

						{categories[
							activeCategory as keyof typeof categories
						].questions.map((item) => (
							<div
								key={item.id}
								className="border border-gray-200 rounded-lg overflow-hidden"
							>
								<button
									onClick={() => toggleQuestion(item.id)}
									className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition"
								>
									<span className="font-medium text-gray-900">
										{item.question}
									</span>
									<svg
										className={`w-5 h-5 text-gray-500 transform transition ${
											openQuestion === item.id ? 'rotate-180' : ''
										}`}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								{openQuestion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.2 }}
										className="p-4 bg-white"
									>
										<p className="text-gray-700">{item.answer}</p>
									</motion.div>
								)}
							</div>
						))}
					</motion.div>
				</div>
			</div>

			<div className="mt-16 bg-purple-50 rounded-xl p-8 text-center">
				<h3 className="text-xl font-bold text-gray-900 mb-2">
					Still have questions?
				</h3>
				<p className="text-gray-600 mb-6">
					Our support team is ready to help you
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<a
						href="tel:+2347078583761"
						className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						Call Support
					</a>
					<a
						href="https://wa.me/2347078583761"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
					>
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
							/>
						</svg>
						WhatsApp Us
					</a>
				</div>
			</div>
		</div>
	);
}
