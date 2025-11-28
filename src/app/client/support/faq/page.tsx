'use client';

import { useState } from 'react';
import {
	ChevronDown,
	ChevronUp,
	Wifi,
	Home,
	Building,
	CreditCard,
	Settings,
	Phone,
	Mail,
	MessageCircle,
} from 'lucide-react';

export default function FAQPage() {
	const [openCategory, setOpenCategory] = useState<string | null>('general');
	const [openItems, setOpenItems] = useState<Set<string>>(new Set(['faq-1']));

	const toggleCategory = (category: string) => {
		setOpenCategory(openCategory === category ? null : category);
	};

	const toggleItem = (itemId: string) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(itemId)) {
			newOpenItems.delete(itemId);
		} else {
			newOpenItems.add(itemId);
		}
		setOpenItems(newOpenItems);
	};

	const faqData = {
		general: {
			title: 'General Information',
			icon: Wifi,
			items: [
				{
					id: 'gen-1',
					question: 'What is Nisi Technologies?',
					answer:
						'Nisi Technologies is a leading Internet Service Provider offering high-speed, reliable internet connectivity for both residential and business customers. We provide unlimited data plans with exceptional customer support and cutting-edge network infrastructure.',
				},
				{
					id: 'gen-2',
					question: 'What areas do you cover?',
					answer:
						'We currently cover major metropolitan areas across Nigeria, with ongoing expansion plans. Please contact our sales team to check availability in your specific location.',
				},
				{
					id: 'gen-3',
					question: 'What makes Nisi Technologies different from other ISPs?',
					answer:
						'We offer truly unlimited data with no fair usage policies, dedicated 24/7 customer support, fast installation times, and reliable connectivity backed by our robust network infrastructure.',
				},
			],
		},
		residential: {
			title: 'Residential Plans',
			icon: Home,
			items: [
				{
					id: 'res-1',
					question: 'What residential plans do you offer?',
					answer: (
						<div className="space-y-3">
							<div className="bg-gray-50 p-3 rounded-lg">
								<strong>Nisi Bronze:</strong> ₦13,922/month - Up to 5Mbps -
								Perfect for browsing and email
							</div>
							<div className="bg-gray-50 p-3 rounded-lg">
								<strong>Nisi Silver:</strong> ₦18,222/month - Up to 10Mbps -
								Ideal for streaming and social media
							</div>
							<div className="bg-gray-50 p-3 rounded-lg">
								<strong>Nisi Gold:</strong> ₦32,197/month - Up to 20Mbps - Great
								for gaming and HD streaming
							</div>
							<div className="bg-gray-50 p-3 rounded-lg">
								<strong>Nisi Platinum:</strong> ₦38,647/month - Up to 30Mbps -
								Ultimate experience for multiple devices
							</div>
						</div>
					),
				},
				{
					id: 'res-2',
					question: 'Are there any data caps or fair usage policies?',
					answer:
						'No! All our residential plans come with truly unlimited data. There are no data caps, throttling, or fair usage policies. Enjoy your internet without restrictions.',
				},
				{
					id: 'res-3',
					question: 'How many devices can I connect simultaneously?',
					answer:
						'Our plans support multiple devices: Bronze (5-8 devices), Silver (8-12 devices), Gold (12-20 devices), Platinum (20-30+ devices). Actual performance may vary based on usage patterns.',
				},
				{
					id: 'res-4',
					question: 'Can I upgrade or downgrade my plan?',
					answer:
						'Yes! You can upgrade your plan at any time, effective immediately. Downgrades take effect at the start of your next billing cycle. No fees for plan changes.',
				},
			],
		},
		business: {
			title: 'Business Solutions',
			icon: Building,
			items: [
				{
					id: 'bus-1',
					question: 'What business packages do you offer?',
					answer: (
						<div className="space-y-3">
							<div className="bg-blue-50 p-3 rounded-lg">
								<strong>Business Standard:</strong> ₦50,000/month - Supports
								30-50 users - Perfect for small to medium offices
							</div>
							<div className="bg-blue-50 p-3 rounded-lg">
								<strong>Business Premium:</strong> ₦200,000/month - Supports
								150-200 users - Enterprise-grade solution for large
								organizations
							</div>
							<p className="text-sm text-gray-600 mt-2">
								Both plans include dedicated support, service level agreements
								(SLA), static IP addresses, and enhanced security features.
							</p>
						</div>
					),
				},
				{
					id: 'bus-2',
					question:
						'Do you offer Service Level Agreements (SLAs) for businesses?',
					answer:
						'Yes! Our Business Premium plan includes a 99.9% uptime SLA with guaranteed response times for technical issues. Business Standard includes a 99.5% uptime guarantee.',
				},
				{
					id: 'bus-3',
					question: 'What additional features come with business plans?',
					answer:
						'Business plans include: Static IP addresses, enhanced security features, priority technical support, detailed usage analytics, dedicated account manager (Premium), and customized billing options.',
				},
			],
		},
		billing: {
			title: 'Billing & Payments',
			icon: CreditCard,
			items: [
				{
					id: 'bill-1',
					question: 'What payment methods do you accept?',
					answer:
						'We accept bank transfers, credit/debit cards, and online payments through various platforms. Automatic recurring billing is available for your convenience.',
				},
				{
					id: 'bill-2',
					question: 'When will I be billed?',
					answer:
						"Billing occurs monthly on the same date you signed up. You'll receive an invoice via email 7 days before your payment is due.",
				},
				{
					id: 'bill-3',
					question: 'What happens if my payment is late?',
					answer:
						"We provide a 3-day grace period after your due date. If payment isn't received within 3 days, service may be temporarily suspended until payment is made. A reconnection fee may apply.",
				},
				{
					id: 'bill-4',
					question: 'Can I get a refund?',
					answer:
						'Refunds are provided for service downtime exceeding 24 hours (pro-rated) or if service cannot be installed in your area. Installation fees are non-refundable once work has commenced.',
				},
			],
		},
		installation: {
			title: 'Installation Process',
			icon: Settings,
			items: [
				{
					id: 'inst-1',
					question: 'How long does installation take?',
					answer:
						'Standard installations are completed within 3-5 business days after payment confirmation. Complex installations or those requiring additional infrastructure may take 7-10 business days.',
				},
				{
					id: 'inst-2',
					question: 'What is included in the installation?',
					answer:
						'Our installation includes: Site survey, equipment setup (router/modem), cable routing to your preferred location, network configuration, and basic speed testing. We ensure everything works perfectly before leaving.',
				},
				{
					id: 'inst-3',
					question: 'Are there any installation fees?',
					answer:
						'Standard installation is free for all plans. However, complex installations requiring additional equipment or specialized work may incur extra charges, which will be communicated and approved beforehand.',
				},
				{
					id: 'inst-4',
					question: 'Do I need to be present during installation?',
					answer:
						'Yes, an adult (18+) must be present during installation to provide access and make decisions about equipment placement. Installation typically takes 2-4 hours.',
				},
			],
		},
		troubleshooting: {
			title: 'Troubleshooting & Support',
			icon: Phone,
			items: [
				{
					id: 'ts-1',
					question: 'What should I do if my internet is down?',
					answer: (
						<div className="space-y-2">
							<p>Follow these steps:</p>
							<ol className="list-decimal list-inside space-y-1 ml-2">
								<li>
									Check if all equipment lights are on (power, internet, WiFi)
								</li>
								<li>
									Restart your router by unplugging for 30 seconds and plugging
									back in
								</li>
								<li>Check if other devices can connect</li>
								<li>Test with a wired connection if possible</li>
								<li>Check our service status page for outages</li>
							</ol>
							<p className="text-sm text-gray-600 mt-2">
								If issues persist, contact our support team with details of what
								you've tried.
							</p>
						</div>
					),
				},
				{
					id: 'ts-2',
					question: 'Why is my internet speed slower than expected?',
					answer:
						'Slow speeds can be caused by: Too many connected devices, WiFi interference, outdated equipment, background downloads, or network congestion. Try connecting via Ethernet cable for accurate speed testing. If issues persist, contact support.',
				},
				{
					id: 'ts-3',
					question: 'How does the technical support payment work?',
					answer:
						'Basic troubleshooting support is always free. If an issue requires an engineer visit and cannot be resolved using our self-help guides, a one-time fee of ₦5,000 applies for the service call. This fee covers the engineer dispatch and onsite troubleshooting.',
				},
				{
					id: 'ts-4',
					question: 'What are your support hours?',
					answer:
						'We provide 24/7 customer support through multiple channels: Phone, email, live chat, and WhatsApp. Technical support for complex issues is available 6:00 AM - 10:00 PM daily.',
				},
				{
					id: 'ts-5',
					question: 'How can I improve my WiFi signal?',
					answer: (
						<div className="space-y-2">
							<p>Try these tips:</p>
							<ul className="list-disc list-inside space-y-1 ml-2">
								<li>
									Place router in a central location, elevated from the floor
								</li>
								<li>Keep away from metal objects, mirrors, and microwaves</li>
								<li>Reduce interference by changing WiFi channel</li>
								<li>Consider a WiFi extender for large homes</li>
								<li>Update router firmware regularly</li>
							</ul>
						</div>
					),
				},
			],
		},
	};

	return (
		<div className="min-h-screen bg-gray-50 gap-4">
			<div className="w-full mx-auto ">
				{/* Header */}
				<div className="w-full bg-white border-b border-gray-200 pt-20 md:pt-12 lg:pt-6 p-4 sm:p-6 lg:pl-6 mb-2">
					<h1 className="text-3xl md:text-xl font-bold text-gray-900">
						Frequently Asked Questions
					</h1>
					<p className="text-xs text-gray-600 mx-auto">
						Find answers to common questions about Nisi Technologies services,
						billing, installation, and troubleshooting.
					</p>
				</div>

				{/* FAQ Categories */}
				<div className="lg:px-2">
					{Object.entries(faqData).map(([key, category]) => {
						const IconComponent = category.icon;
						return (
							<div
								key={key}
								className="bg-white rounded-lg border border-gray-50 overflow-hidden"
							>
								{/* Category Header */}
								<button
									onClick={() => toggleCategory(key)}
									className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
								>
									<div className="flex items-center gap-2">
										<IconComponent className="w-6 h-6 text-purple-500" />
										<h2 className="text-sm md:xl font-semibold text-gray-900">
											{category.title}
										</h2>
									</div>
									{openCategory === key ? (
										<ChevronUp className="w-5 h-5 text-gray-500" />
									) : (
										<ChevronDown className="w-5 h-5 text-gray-500" />
									)}
								</button>

								{/* Category Content */}
								{openCategory === key && (
									<div className="border-t border-gray-200">
										{category.items.map((item) => (
											<div
												key={item.id}
												className="border-b border-gray-100 last:border-b-0"
											>
												<button
													onClick={() => toggleItem(item.id)}
													className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
												>
													<span className="font-medium text-gray-900 pr-4">
														{item.question}
													</span>
													{openItems.has(item.id) ? (
														<ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
													) : (
														<ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
													)}
												</button>
												{openItems.has(item.id) && (
													<div className="px-6 pb-6">
														<div className="text-gray-600 leading-relaxed">
															{item.answer}
														</div>
													</div>
												)}
											</div>
										))}
									</div>
								)}
							</div>
						);
					})}
				</div>

				{/* Still Need Help Section */}
				<div className="bg-purple-50 rounded-lg p-8 mt-12 text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Still Need Help?
					</h2>
					<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
						Our support team is ready to assist you with any questions or issues
						you might have. We're committed to providing you with the best
						service experience.
					</p>
					{/* Contact Quick Actions */}
					<div className="grid grid-cols-3 gap-2 mb-2 px-2">
						<div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-gray-200">
							<Phone className="sm:w-8 sm:h-8 w-6 h-6 text-purple-500 mx-auto mb-3 sm:mb-3 mb-2" />
							<h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
								Call Support
							</h3>
							<p className="text-gray-600 text-[10px] sm:text-sm mb-1">
								24/7 Customer Service
							</p>
							<a
								href="tel:+2349048717653"
								className="text-purple-500 font-medium hover:text-purple-600 text-xs"
							>
								Call
							</a>
						</div>

						<div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-gray-200">
							<MessageCircle className=" sm:w-8 sm:h-8 w-6 h-6 text-purple-500 mx-auto mb-3 sm:mb-3 mb-2" />
							<h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
								Live Chat
							</h3>
							<p className="text-gray-600 text-[10px] sm:text-sm mb-1">
								Instant Help Online
							</p>
							<button className="text-purple-500 font-medium hover:text-purple-600 text-xs">
								Start Chat
							</button>
						</div>

						<div className="bg-white rounded-lg p-4 sm:p-6 text-center border border-gray-200">
							<Mail className="sm:w-8 sm:h-8 w-6 h-6 text-purple-500 mx-auto mb-3 sm:mb-3 mb-2" />
							<h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
								Email Us
							</h3>
							<p className="text-gray-600 text-[10px] sm:text-sm mb-1">
								Detailed Inquiries
							</p>
							<a
								href="mailto:support@nisitechologies.com"
								className="text-purple-500 font-medium hover:text-purple-600 text-xs"
							>
								Send Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
