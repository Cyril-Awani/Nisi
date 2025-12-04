'use client';

import {
	Phone,
	MessageCircle,
	Mail,
	Wrench,
	Calendar,
	Shield,
} from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
	const [showTechnicianModal, setShowTechnicianModal] = useState(false);
	const [technicianPlan, setTechnicianPlan] = useState<'monthly' | 'one-time'>(
		'monthly'
	);

	const handleRequestTechnician = () => {
		setShowTechnicianModal(true);
	};

	const handleConfirmTechnician = () => {
		// Handle technician request confirmation
		console.log(`Requesting technician with ${technicianPlan} plan`);
		setShowTechnicianModal(false);
		// Add your API call or navigation logic here
	};

	return (
		<>
			{/* Still Need Help Section - Improved */}
			<div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 mt-12 border border-purple-100 shadow-sm">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold text-gray-900 mb-3">
						Still Need Help?
					</h2>
					<p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
						Our support team is ready to assist you with any questions or issues
						you might have. We&apos;re committed to providing you with the best
						service experience.
					</p>

					{/* Technician Banner */}
					<div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 mb-8 text-white max-w-3xl mx-auto">
						<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
							<div className="flex items-center gap-4">
								<div className="bg-white/20 p-3 rounded-lg">
									<Wrench className="w-8 h-8" />
								</div>
								<div className="text-left">
									<h3 className="text-xl font-bold mb-1">Need a Technician?</h3>
									<p className="text-white/90 text-sm">
										Professional technical support available
									</p>
								</div>
							</div>
							<div className="flex flex-col sm:items-end gap-2">
								<div className="flex items-baseline gap-2">
									<span className="text-2xl font-bold">₦5,000</span>
									<span className="text-sm text-white/80">per month</span>
								</div>
								<button
									onClick={handleRequestTechnician}
									className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
								>
									Request Technician
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* Contact Quick Actions - Improved */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
					{/* Call Support */}
					<div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all group cursor-pointer">
						<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
							<Phone className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="font-bold text-gray-900 text-lg mb-2">
							Call Support
						</h3>
						<p className="text-gray-600 text-sm mb-4">
							24/7 Customer Service Hotline
						</p>
						<div className="space-y-2">
							<a
								href="tel:+2349048717653"
								className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 text-sm cursor-pointer"
							>
								<span className="text-lg">📞</span>
								+234 904 871 7653
							</a>
							<p className="text-xs text-gray-500">Immediate assistance</p>
						</div>
					</div>

					{/* Live Chat */}
					<div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
						<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
							<MessageCircle className="w-8 h-8 text-blue-600" />
						</div>
						<h3 className="font-bold text-gray-900 text-lg mb-2">Live Chat</h3>
						<p className="text-gray-600 text-sm mb-4">
							Instant messaging with our experts
						</p>
						<div className="space-y-2">
							<button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-sm cursor-pointer">
								<span className="text-lg">💬</span>
								Start Live Chat
							</button>
							<p className="text-xs text-gray-500">
								Average response: 2 minutes
							</p>
						</div>
					</div>

					{/* Email Us */}
					<div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group cursor-pointer">
						<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
							<Mail className="w-8 h-8 text-green-600" />
						</div>
						<h3 className="font-bold text-gray-900 text-lg mb-2">
							Email Support
						</h3>
						<p className="text-gray-600 text-sm mb-4">
							Detailed inquiries and documentation
						</p>
						<div className="space-y-2">
							<a
								href="mailto:support@nisitechologies.com"
								className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 text-sm break-all cursor-pointer"
							>
								<span className="text-lg">✉️</span>
								support@nisitechologies.com
							</a>
							<p className="text-xs text-gray-500">Response within 24 hours</p>
						</div>
					</div>
				</div>

				{/* Additional Info */}
				<div className="mt-10 pt-8 border-t border-gray-200">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<div className="flex items-start gap-4">
							<Calendar className="w-6 h-6 text-purple-500 mt-1" />
							<div>
								<h4 className="font-semibold text-gray-900 mb-1">
									Service Hours
								</h4>
								<p className="text-gray-600 text-sm">
									Monday - Sunday: 24/7 Support
									<br />
									On-site visits: 8 AM - 6 PM
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<Shield className="w-6 h-6 text-purple-500 mt-1" />
							<div>
								<h4 className="font-semibold text-gray-900 mb-1">Guarantee</h4>
								<p className="text-gray-600 text-sm">
									100% Satisfaction guaranteed
									<br />
									30-day service warranty on all repairs
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Technician Request Modal */}
			{showTechnicianModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 cursor-pointer">
					<div className="bg-white rounded-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95">
						<div className="flex items-center gap-3 mb-6">
							<div className="bg-purple-100 p-3 rounded-lg">
								<Wrench className="w-6 h-6 text-purple-600" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900">
									Request Technician
								</h3>
								<p className="text-gray-600 text-sm">
									Choose your support plan
								</p>
							</div>
						</div>

						{/* Plan Options */}
						<div className="space-y-4 mb-8">
							<div
								onClick={() => setTechnicianPlan('monthly')}
								className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
									technicianPlan === 'monthly'
										? 'border-purple-500 bg-purple-50'
										: 'border-gray-200 hover:border-purple-300'
								}`}
							>
								<div className="flex items-center justify-between mb-2">
									<div>
										<h4 className="font-bold text-gray-900">Monthly Plan</h4>
										<p className="text-gray-600 text-sm">
											Unlimited support calls
										</p>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-purple-600">
											₦5,000
										</div>
										<div className="text-xs text-gray-500">per month</div>
									</div>
								</div>
								<ul className="text-sm text-gray-600 space-y-1">
									<li>• Priority response time</li>
									<li>• Regular maintenance checks</li>
									<li>• Equipment diagnostics included</li>
								</ul>
							</div>

							<div
								onClick={() => setTechnicianPlan('one-time')}
								className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
									technicianPlan === 'one-time'
										? 'border-blue-500 bg-blue-50'
										: 'border-gray-200 hover:border-blue-300'
								}`}
							>
								<div className="flex items-center justify-between mb-2">
									<div>
										<h4 className="font-bold text-gray-900">One-time Visit</h4>
										<p className="text-gray-600 text-sm">Single service call</p>
									</div>
									<div className="text-right">
										<div className="text-lg font-bold text-blue-600">
											₦15,000
										</div>
										<div className="text-xs text-gray-500">per visit</div>
									</div>
								</div>
								<ul className="text-sm text-gray-600 space-y-1">
									<li>• Standard response time</li>
									<li>• One-time troubleshooting</li>
									<li>• Parts extra if needed</li>
								</ul>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-3">
							<button
								onClick={() => setShowTechnicianModal(false)}
								className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
							>
								Cancel
							</button>
							<button
								onClick={handleConfirmTechnician}
								className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
							>
								Confirm Request
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
