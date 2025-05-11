'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InternetSignupProgress() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		plan: '',
		paymentProof: null as File | null,
		agreedToTerms: false,
		installationDate: '',
		invoiceNumber: `INV-${Math.floor(100000 + Math.random() * 900000)}`,
	});

	const plans = [
		{
			id: 'bronze',
			name: 'Bronze',
			speed: '5 Mbps',
			devices: 'Up to 5 Devices',
			price: '₦13,922/mo',
			features: ['Unlimited data', 'Free installation', '24/7 support'],
		},
		{
			id: 'silver',
			name: 'Silver',
			speed: '10 Mbps',
			devices: 'Up to 10 Devices',
			price: '₦18,222/mo',
			features: ['Unlimited data', 'Free modem', 'Priority support'],
			popular: true,
		},
		{
			id: 'gold',
			name: 'Gold',
			speed: '20 Mbps',
			devices: 'Up to 20 Devices',
			price: '₦38,499/mo',
			features: ['Unlimited data', 'Free modem & router', 'VIP support'],
		},
		{
			id: 'platinum',
			name: 'Platinum',
			speed: '50 Mbps',
			devices: 'Up to 50 Devices',
			price: '₦50,000/mo',
			features: ['Unlimited data', 'Free modem & router', 'VVIP support'],
		},
	];

	const handleSignupSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (
			formData.name &&
			formData.email &&
			formData.phone &&
			formData.address &&
			formData.plan &&
			formData.agreedToTerms
		) {
			setStep(2);
			console.log('Signup submitted:', formData);
		}
	};

	const handlePaymentContinue = () => {
		setStep(3);
	};

	const handleReceiptUpload = (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.paymentProof) {
			setStep(4);
			// Simulate processing time
			setTimeout(() => {
				const installationDate = new Date();
				installationDate.setDate(
					installationDate.getDate() + 3 + Math.floor(Math.random() * 3)
				);
				setFormData((prev) => ({
					...prev,
					installationDate: installationDate.toLocaleDateString('en-US', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						hour: '2-digit',
						minute: '2-digit',
					}),
				}));
			}, 1500);
		}
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFormData({ ...formData, paymentProof: e.target.files[0] });
		}
	};

	const downloadInvoice = () => {
		// In a real app, this would generate/download an actual invoice
		console.log('Downloading invoice for', formData.invoiceNumber);
		alert(`Invoice ${formData.invoiceNumber} downloaded (simulated)`);
	};

	return (
		<div className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
			{/* Progress Stepper */}
			<div className="mb-8 md:mb-12">
				<div className="flex justify-between relative">
					<div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
					<div
						className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 transition-all duration-300"
						style={{
							width:
								step === 1
									? '0%'
									: step === 2
									? '33%'
									: step === 3
									? '66%'
									: '100%',
						}}
					></div>

					{[1, 2, 3, 4].map((stepNumber) => (
						<div key={stepNumber} className="flex flex-col items-center">
							<div
								className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
									step >= stepNumber
										? 'bg-blue-600 text-white border-blue-600'
										: 'bg-white border-gray-300 text-gray-400'
								}`}
							>
								{stepNumber}
							</div>
							<span
								className={`mt-2 text-xs md:text-sm font-medium ${
									step >= stepNumber ? 'text-blue-600' : 'text-gray-500'
								}`}
							>
								{stepNumber === 1
									? 'Sign Up'
									: stepNumber === 2
									? 'Payment'
									: stepNumber === 3
									? 'Upload Receipt'
									: 'Confirmation'}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Content Area */}
			<div className="min-h-[400px]">
				<AnimatePresence mode="wait">
					{step === 1 && (
						<motion.div
							key="step1"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-2xl font-bold mb-6">
								Sign Up for Internet Service
							</h2>
							<form onSubmit={handleSignupSubmit} className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Full Name*
										</label>
										<input
											type="text"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											className="w-full px-3 py-2 border rounded-md"
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Email*
										</label>
										<input
											type="email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											className="w-full px-3 py-2 border rounded-md"
											required
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Phone Number*
										</label>
										<input
											type="tel"
											value={formData.phone}
											onChange={(e) =>
												setFormData({ ...formData, phone: e.target.value })
											}
											className="w-full px-3 py-2 border rounded-md"
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Installation Address*
										</label>
										<input
											type="text"
											value={formData.address}
											onChange={(e) =>
												setFormData({ ...formData, address: e.target.value })
											}
											className="w-full px-3 py-2 border rounded-md"
											required
										/>
									</div>
								</div>

								<div className="mt-6">
									<h3 className="font-medium mb-3">Select Your Plan*</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
										{plans.map((plan) => (
											<div
												key={plan.id}
												onClick={() =>
													setFormData({ ...formData, plan: plan.id })
												}
												className={`border rounded-lg p-4 cursor-pointer transition-all relative ${
													formData.plan === plan.id
														? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
														: 'border-gray-200 hover:border-blue-300'
												} ${plan.popular ? 'border-yellow-300' : ''}`}
											>
												{plan.popular && (
													<div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl rounded-tr">
														POPULAR
													</div>
												)}
												<h4 className="font-bold text-lg">{plan.name}</h4>
												<p className="text-blue-600 font-semibold my-1">
													{plan.price}
												</p>
												<p className="text-sm text-gray-600">
													{plan.speed} • {plan.devices}
												</p>
												<ul className="mt-2 text-xs space-y-1">
													{plan.features.map((feature, i) => (
														<li key={i} className="flex items-start">
															<svg
																className="h-3 w-3 text-green-500 mt-0.5 mr-1 flex-shrink-0"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M5 13l4 4L19 7"
																/>
															</svg>
															<span>{feature}</span>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</div>

								<div className="mt-4">
									<label className="flex items-start">
										<input
											type="checkbox"
											checked={formData.agreedToTerms}
											onChange={(e) =>
												setFormData({
													...formData,
													agreedToTerms: e.target.checked,
												})
											}
											className="mt-1 mr-2"
											required
										/>
										<span className="text-sm">
											I agree to the{' '}
											<a href="#" className="text-blue-600">
												Terms of Service
											</a>{' '}
											and authorize Nisi Technologies to contact me
										</span>
									</label>
								</div>

								<button
									type="submit"
									className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
								>
									Continue to Payment
								</button>
							</form>
						</motion.div>
					)}

					{step === 2 && (
						<motion.div
							key="step2"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-2xl font-bold mb-6">Payment Information</h2>

							<div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
								<h3 className="font-bold text-lg mb-4">Order Summary</h3>
								<div className="space-y-3">
									<div className="flex justify-between">
										<span className="text-gray-600">Selected Plan:</span>
										<span className="font-medium">
											{plans.find((p) => p.id === formData.plan)?.name ||
												'Not selected'}
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Monthly Price:</span>
										<span className="font-medium">
											{plans.find((p) => p.id === formData.plan)?.price || '--'}
										</span>
									</div>
									<div className="flex justify-between border-t pt-3">
										<span className="text-gray-600">Installation Fee:</span>
										<span className="font-medium">₦0 (FREE)</span>
									</div>
									<div className="flex justify-between font-bold text-lg pt-3 border-t">
										<span>Total Due Now:</span>
										<span>
											{plans.find((p) => p.id === formData.plan)?.price || '--'}
										</span>
									</div>
								</div>
							</div>

							<div className="bg-blue-50 p-6 rounded-lg mb-6">
								<h3 className="font-bold text-lg mb-3">Payment Instructions</h3>
								<ol className="list-decimal list-inside space-y-2 text-sm">
									<li>Make payment to our bank account</li>
									<li>Bank: Zenith Bank</li>
									<li>Account Name: Nisi Technologies Ltd</li>
									<li>Account Number: 1234567890</li>
									<li>
										Amount:{' '}
										{plans.find((p) => p.id === formData.plan)?.price || '--'}
									</li>
									<li>Use your name as payment reference</li>
								</ol>
								<button
									onClick={downloadInvoice}
									className="mt-4 flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 mr-1"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
										/>
									</svg>
									Download Payment Invoice
								</button>
							</div>

							<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg
											className="h-5 w-5 text-yellow-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div className="ml-3">
										<p className="text-sm text-yellow-700">
											After payment, proceed to upload your payment receipt in
											the next step to schedule your installation.
										</p>
									</div>
								</div>
							</div>

							<button
								onClick={handlePaymentContinue}
								className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
							>
								I`ve Made Payment - Continue
							</button>
						</motion.div>
					)}

					{step === 3 && (
						<motion.div
							key="step3"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-2xl font-bold mb-6">
								Upload Payment Receipt
							</h2>

							<form onSubmit={handleReceiptUpload} className="space-y-6">
								<div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
									{formData.paymentProof ? (
										<div className="text-green-600">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-12 w-12 mx-auto mb-2"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											<p className="font-medium">
												{formData.paymentProof.name}
											</p>
											<p className="text-sm text-gray-500 mt-1">
												{(formData.paymentProof.size / 1024).toFixed(1)} KB
											</p>
											<button
												type="button"
												onClick={() =>
													setFormData({ ...formData, paymentProof: null })
												}
												className="mt-2 text-sm text-blue-600 hover:text-blue-800"
											>
												Change File
											</button>
										</div>
									) : (
										<div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-12 w-12 mx-auto text-gray-400"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
												/>
											</svg>
											<div className="mt-4 flex text-sm text-gray-600">
												<label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
													<span>Upload a file</span>
													<input
														type="file"
														className="sr-only"
														onChange={handleFileChange}
														accept="image/*,.pdf"
														required
													/>
												</label>
												<p className="pl-1">or drag and drop</p>
											</div>
											<p className="text-xs text-gray-500 mt-1">
												PNG, JPG, PDF up to 5MB
											</p>
										</div>
									)}
								</div>

								<div className="bg-blue-50 p-4 rounded-lg">
									<h3 className="font-medium mb-2">What happens next?</h3>
									<ul className="text-sm space-y-1">
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>We`ll verify your payment within 24 hours</span>
										</li>
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>
												Installation will be scheduled within 2-5 working days
											</span>
										</li>
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>
												You`ll receive a confirmation with installation date
											</span>
										</li>
									</ul>
								</div>

								<button
									type="submit"
									disabled={!formData.paymentProof}
									className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium ${
										!formData.paymentProof
											? 'opacity-50 cursor-not-allowed'
											: ''
									}`}
								>
									Submit Receipt
								</button>
							</form>
						</motion.div>
					)}

					{step === 4 && (
						<motion.div
							key="step4"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3 }}
							className="text-center"
						>
							<div className="bg-purple-100 p-8 rounded-lg">
								<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10 text-green-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h2 className="text-2xl font-bold mb-2">
									Thank You for Your Payment!
								</h2>
								<p className="text-gray-600 mb-6">
									Your {plans.find((p) => p.id === formData.plan)?.name} plan is
									now being processed.
								</p>

								<div className="bg-white border border-green-200 rounded-lg p-6 inline-block text-left max-w-md w-full">
									<h3 className="font-bold text-lg mb-4">
										Installation Details
									</h3>
									<div className="space-y-3">
										<div className="flex justify-between">
											<span className="text-gray-600">Customer Name:</span>
											<span className="font-medium">{formData.name}</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-600">Service Address:</span>
											<span className="font-medium text-right">
												{formData.address}
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-600">Selected Plan:</span>
											<span className="font-medium">
												{plans.find((p) => p.id === formData.plan)?.name}
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-600">Invoice Number:</span>
											<span className="font-medium">
												{formData.invoiceNumber}
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-600">Payment Status:</span>
											<span className="font-medium text-orange-600">
												Pending
											</span>
										</div>
										<div className="flex justify-between">
											<span className="text-gray-600">Installation Date:</span>
											<span className="font-medium">
												{formData.installationDate ||
													'Will be scheduled within 2-5 working days'}
											</span>
										</div>
									</div>

									<div className="mt-6 flex justify-between">
										<button
											onClick={downloadInvoice}
											className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
												/>
											</svg>
											Download Invoice
										</button>
										<button
											onClick={() => window.print()}
											className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
												/>
											</svg>
											Print
										</button>
									</div>
								</div>

								<div className="mt-8 bg-blue-50 p-4 rounded-lg">
									<h3 className="font-medium mb-2">What to expect next:</h3>
									<ul className="text-sm space-y-1 text-left max-w-md mx-auto">
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>
												Our team will contact you within 24 hours to confirm
												your installation date
											</span>
										</li>
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>
												Your Installation will wil be carried out within 2-5
												working days
											</span>
										</li>
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
											<span>
												Technician will arrive with all necessary equipment
											</span>
										</li>
									</ul>
								</div>

								<button
									className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
									onClick={() => {
										// In a real app, this would navigate to dashboard
										console.log('Going to dashboard...');
									}}
								>
									Back to Homepage
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
