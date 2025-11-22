'use client';

import { useState } from 'react';

const faqItems = [
	{
		question: 'How long does it take to install the service?',
		answer:
			'Installation typically takes 2-5 days after confirmation depending on your location and setup requirements. Our technician will provide a more accurate timeframe during the site survey.',
	},
	{
		question: 'What equipment do I need to get started?',
		answer:
			"We provide all necessary equipment including a modem and router. You'll just need a power outlet and a device to connect (computer, phone, etc.).",
	},
	{
		question: 'What is your customer service policy?',
		answer:
			'We offer 24/7 customer support with a guaranteed response time of under 30 minutes for critical issues. Our standard support hours are 9am-5pm daily.',
	},
	{
		question: 'What if I have a problem with my internet connection?',
		answer:
			'First, try restarting your equipment. If the issue persists, contact our support team immediately. We offer remote troubleshooting and can dispatch a technician if needed.',
	},
];

export default function HelpSection() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const whatsappNumber = '2348165565075'; // Replace with your WhatsApp number (without + or 0)

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Frequently Asked Questions
				</h2>

				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-1/2">
						<div className="space-y-4">
							{faqItems.map((item, index) => (
								<div
									key={index}
									className="border border-gray-200 rounded-lg overflow-hidden"
								>
									<button
										className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition"
										onClick={() => toggleAccordion(index)}
									>
										<span className="font-medium text-lg">{item.question}</span>
										<svg
											className={`w-5 h-5 transition-transform${
												activeIndex === index ? 'transform rotate-180' : ''
											}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
									<div
										className={`bg-gray-50 px-4 overflow-hidden transition-all duration-300 ${
											activeIndex === index ? 'max-h-40 py-4' : 'max-h-0 py-0'
										}`}
									>
										<p className="text-gray-600">{item.answer}</p>
									</div>
								</div>
							))}
						</div>
						<div className="text-right mt-4">
							<a
								href="/faq"
								className="text-purple-700 font-semibold hover:underline"
							>
								More FAQs →
							</a>
						</div>
					</div>

					<div className="lg:w-1/2 bg-purple-800 text-white p-8 rounded-lg">
						<div className="max-w-md mx-auto lg:mx-0">
							<h3 className="text-2xl font-bold mb-4">Still Need Our Help?</h3>
							<p className="mb-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<a
									href="tel:+2348165565075"
									className="flex-1 bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition flex items-center justify-center gap-2 whitespace-nowrap"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1c-9.39 0-17-7.61-17-17a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
									</svg>
									Call Support
								</a>

								<a
									href={`https://wa.me/${whatsappNumber}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 whitespace-nowrap"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-12.21c-5.297 0-9.588 4.29-9.588 9.586 0 1.84.504 3.555 1.384 5.032L2.33 20.676l1.586-4.34a9.554 9.554 0 0 1-1.384-5.032c0-5.297 4.291-9.586 9.588-9.586 5.296 0 9.587 4.29 9.587 9.586 0 5.297-4.291 9.586-9.587 9.586" />
									</svg>
									Message on WhatsApp
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
