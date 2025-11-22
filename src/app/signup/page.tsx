'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import TermsModal from '@/components/TermsModal';

export default function InternetSignupProgress() {
	const router = useRouter();
	const [step, setStep] = useState(1);
	const [showTerms, setShowTerms] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		plan: '',
		paymentMethod: '',
		paymentProof: null as File | null,
		agreedToTerms: false,
		installationDate: '',
		invoiceNumber: `INV-${Math.floor(100000 + Math.random() * 900000)}`,
		addons: {
			powerbank: { selected: false, quantity: 0, price: 40000 },
			basicRouter: { selected: false, quantity: 0, price: 57000 },
			highPowerRouter: { selected: false, quantity: 0, price: 40000 },
			extraPole: { selected: false, quantity: 0, price: 10000 },
			extraWire: { meters: 0, price: 500 },
		},
	});

	const [formErrors, setFormErrors] = useState({
		plan: false,
	});

	const plans = [
		{
			id: 'bronze',
			name: 'Nisi Bronze',
			speed: '5 Mbps',
			devices: 'Up to 5 Devices',
			price: '₦13,922/mo',
			features: ['Unlimited data', 'Free installation', '24/7 support'],
		},
		{
			id: 'silver',
			name: 'Nisi Silver',
			speed: '10 Mbps',
			devices: 'Up to 10 Devices',
			price: '₦18,222/mo',
			features: ['Unlimited data', 'Free modem', 'Priority support'],
			popular: true,
		},
		{
			id: 'Nisi Gold',
			name: 'Gold',
			speed: '20 Mbps',
			devices: 'Up to 20 Devices',
			price: '₦32,197/mo',
			features: ['Unlimited data', 'Free modem & router', 'VIP support'],
		},
		{
			id: 'Nisi Platinum',
			name: 'Platinum',
			speed: '50 Mbps',
			devices: 'Up to 50 Devices',
			price: '₦38,647/mo',
			features: ['Unlimited data', 'Free modem & router', 'VVIP support'],
		},
	];

	const paymentMethods = [
		{
			id: 'bank-transfer',
			name: 'Bank Transfer',
			description: 'Direct transfer to our bank account',
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
					/>
				</svg>
			),
		},
		{
			id: 'flutterwave',
			name: 'Flutterwave',
			description: 'Pay with card or mobile money',
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 22a10 10 0 110-20 10 10 0 010 20zm-3.5-8.5v-5h7v5h-7z" />
				</svg>
			),
		},
		{
			id: 'pos',
			name: 'POS Payment',
			description: 'Pay at our office or agent location',
			icon: (
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
					/>
				</svg>
			),
		},
	];

	const handleSignupSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const errors = {
			plan: !formData.plan,
		};
		setFormErrors(errors);

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
				const today = new Date();
				const workingDaysToAdd = 5;
				let addedDays = 0;
				const potentialDate = new Date(today);

				while (addedDays < workingDaysToAdd) {
					potentialDate.setDate(potentialDate.getDate() + 1);
					const day = potentialDate.getDay();
					if (day !== 0 && day !== 6) {
						addedDays++;
					}
				}

				setFormData((prev) => ({
					...prev,
					installationDate: potentialDate.toLocaleDateString('en-US', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric',
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
		console.log('Downloading invoice for', formData.invoiceNumber);
		alert(`Invoice ${formData.invoiceNumber} downloaded (simulated)`);
	};

	const updateAddonQuantity = (addon: string, value: number) => {
		setFormData((prev) => {
			const newAddons = { ...prev.addons };
			if (addon === 'extraWire') {
				newAddons.extraWire.meters = Math.max(0, value);
			} else {
				// @ts-expect-error - Dynamically accessing addon properties is safe here
				newAddons[addon].quantity = Math.max(0, value);
				// @ts-expect-error - Dynamically accessing addon properties is safe here
				newAddons[addon].selected = value > 0;
			}
			return { ...prev, addons: newAddons };
		});
	};

	const calculateTotal = () => {
		const planPrice = plans.find((p) => p.id === formData.plan)?.price || '₦0';
		const numericPlanPrice = parseInt(planPrice.replace(/[^\d]/g, '')) || 0;

		const addonsTotal =
			formData.addons.powerbank.quantity * formData.addons.powerbank.price +
			formData.addons.basicRouter.quantity * formData.addons.basicRouter.price +
			formData.addons.highPowerRouter.quantity *
				formData.addons.highPowerRouter.price +
			formData.addons.extraPole.quantity * formData.addons.extraPole.price +
			formData.addons.extraWire.meters * formData.addons.extraWire.price;

		const deviceSetupCost = 210000;

		const total = numericPlanPrice + addonsTotal + deviceSetupCost;
		return total;
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('en-NG', {
			style: 'currency',
			currency: 'NGN',
			minimumFractionDigits: 0,
		}).format(amount);
	};

	return (
		<div className="max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
			<div className="mb-8 md:mb-12">
				<div className="flex justify-between relative">
					<div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
					<div
						className="absolute top-1/2 left-0 h-1 bg-purple-600 -z-10 transition-all duration-300"
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
										? 'bg-purple-600 text-white border-purple-600'
										: 'bg-white border-gray-300 text-gray-400'
								}`}
							>
								{stepNumber}
							</div>
							<span
								className={`mt-2 text-xs md:text-sm font-medium ${
									step >= stepNumber ? 'text-purple-600' : 'text-gray-500'
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
								Sign Up for <br className="block sm:hidden" />
								<span className="text-purple-700">
									Nisi Unlimited Internet Service
								</span>
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
									<div className="flex justify-between items-center mb-3">
										<h3 className="font-medium">Select Your Plan*</h3>
										{formErrors.plan && (
											<span className="text-red-500 text-sm">
												Please select a plan
											</span>
										)}
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
										{plans.map((plan) => (
											<div
												key={plan.id}
												onClick={() =>
													setFormData({ ...formData, plan: plan.id })
												}
												className={`border rounded-lg p-4 cursor-pointer transition-all relative ${
													formData.plan === plan.id
														? 'border-purple-500 bg-purple-50 ring-2 ring-purple-200'
														: 'border-gray-200 hover:border-purple-300'
												} ${plan.popular ? 'border-yellow-300' : ''}`}
											>
												{plan.popular && (
													<div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-bl rounded-tr">
														POPULAR
													</div>
												)}
												<h4 className="font-bold text-lg">{plan.name}</h4>
												<p className="text-purple-600 font-semibold my-1">
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
											<button
												type="button"
												className="text-purple-600 underline hover:text-purple-800 focus:outline-none"
												onClick={(e) => {
													e.preventDefault();
													setShowTerms(true);
												}}
											>
												Terms of Service
											</button>{' '}
											and authorize Nisi Technologies to contact me.
										</span>
									</label>
								</div>

								<button
									type="submit"
									className="mt-6 w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-medium"
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

									<div className="flex justify-between">
										<span className="text-gray-600">Device & Setup Cost:</span>
										<span className="font-medium">₦210,000</span>
									</div>

									<div className="border-t pt-3">
										<h4 className="text-gray-600 mb-2">Addons:</h4>
										<div className="space-y-4">
											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<input
														type="checkbox"
														id="powerbank"
														className="mr-2"
														checked={formData.addons.powerbank.selected}
														onChange={(e) => {
															updateAddonQuantity(
																'powerbank',
																e.target.checked ? 1 : 0
															);
														}}
													/>
													<label htmlFor="powerbank">
														Power Bank (₦40,000)
													</label>
												</div>
												{formData.addons.powerbank.selected && (
													<div className="flex items-center">
														<button
															onClick={() =>
																updateAddonQuantity(
																	'powerbank',
																	formData.addons.powerbank.quantity - 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-l-md bg-gray-100 hover:bg-gray-200"
														>
															-
														</button>
														<span className="w-10 h-8 flex items-center justify-center border-t border-b">
															{formData.addons.powerbank.quantity}
														</span>
														<button
															onClick={() =>
																updateAddonQuantity(
																	'powerbank',
																	formData.addons.powerbank.quantity + 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-r-md bg-gray-100 hover:bg-gray-200"
														>
															+
														</button>
													</div>
												)}
											</div>

											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<input
														type="checkbox"
														id="basicRouter"
														className="mr-2"
														checked={formData.addons.basicRouter.selected}
														onChange={(e) => {
															updateAddonQuantity(
																'basicRouter',
																e.target.checked ? 1 : 0
															);
														}}
													/>
													<label htmlFor="basicRouter">
														Basic Router Extender (₦45,000)
													</label>
												</div>
												{formData.addons.basicRouter.selected && (
													<div className="flex items-center">
														<button
															onClick={() =>
																updateAddonQuantity(
																	'basicRouter',
																	formData.addons.basicRouter.quantity - 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-l-md bg-gray-100 hover:bg-gray-200"
														>
															-
														</button>
														<span className="w-10 h-8 flex items-center justify-center border-t border-b">
															{formData.addons.basicRouter.quantity}
														</span>
														<button
															onClick={() =>
																updateAddonQuantity(
																	'basicRouter',
																	formData.addons.basicRouter.quantity + 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-r-md bg-gray-100 hover:bg-gray-200"
														>
															+
														</button>
													</div>
												)}
											</div>

											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<input
														type="checkbox"
														id="highPowerRouter"
														className="mr-2"
														checked={formData.addons.highPowerRouter.selected}
														onChange={(e) => {
															updateAddonQuantity(
																'highPowerRouter',
																e.target.checked ? 1 : 0
															);
														}}
													/>
													<label htmlFor="highPowerRouter">
														Wifi-6/7 Router (₦80,000)
													</label>
												</div>
												{formData.addons.highPowerRouter.selected && (
													<div className="flex items-center">
														<button
															onClick={() =>
																updateAddonQuantity(
																	'highPowerRouter',
																	formData.addons.highPowerRouter.quantity - 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-l-md bg-gray-100 hover:bg-gray-200"
														>
															-
														</button>
														<span className="w-10 h-8 flex items-center justify-center border-t border-b">
															{formData.addons.highPowerRouter.quantity}
														</span>
														<button
															onClick={() =>
																updateAddonQuantity(
																	'highPowerRouter',
																	formData.addons.highPowerRouter.quantity + 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-r-md bg-gray-100 hover:bg-gray-200"
														>
															+
														</button>
													</div>
												)}
											</div>

											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<input
														type="checkbox"
														id="extraPole"
														className="mr-2"
														checked={formData.addons.extraPole.selected}
														onChange={(e) => {
															updateAddonQuantity(
																'extraPole',
																e.target.checked ? 1 : 0
															);
														}}
													/>
													<label htmlFor="extraPole">
														Extra Pole (₦10,000)
													</label>
												</div>
												{formData.addons.extraPole.selected && (
													<div className="flex items-center">
														<button
															onClick={() =>
																updateAddonQuantity(
																	'extraPole',
																	formData.addons.extraPole.quantity - 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-l-md bg-gray-100 hover:bg-gray-200"
														>
															-
														</button>
														<span className="w-10 h-8 flex items-center justify-center border-t border-b">
															{formData.addons.extraPole.quantity}
														</span>
														<button
															onClick={() =>
																updateAddonQuantity(
																	'extraPole',
																	formData.addons.extraPole.quantity + 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-r-md bg-gray-100 hover:bg-gray-200"
														>
															+
														</button>
													</div>
												)}
											</div>

											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<input
														type="checkbox"
														id="extraWire"
														className="mr-2"
														checked={formData.addons.extraWire.meters > 0}
														onChange={(e) => {
															updateAddonQuantity(
																'extraWire',
																e.target.checked ? 1 : 0
															);
														}}
													/>
													<label htmlFor="extraWire">
														Extra Wire (₦500/ m)
													</label>
												</div>
												{formData.addons.extraWire.meters > 0 && (
													<div className="flex items-center">
														<button
															onClick={() =>
																updateAddonQuantity(
																	'extraWire',
																	formData.addons.extraWire.meters - 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-l-md bg-gray-100 hover:bg-gray-200"
														>
															-
														</button>
														<input
															type="number"
															min="0"
															value={formData.addons.extraWire.meters}
															onChange={(e) =>
																updateAddonQuantity(
																	'extraWire',
																	parseInt(e.target.value) || 0
																)
															}
															className="w-16 h-8 text-center border-t border-b"
														/>
														<button
															onClick={() =>
																updateAddonQuantity(
																	'extraWire',
																	formData.addons.extraWire.meters + 1
																)
															}
															className="w-8 h-8 flex items-center justify-center border rounded-r-md bg-gray-100 hover:bg-gray-200"
														>
															+
														</button>
													</div>
												)}
											</div>
										</div>
									</div>

									<div className="flex justify-between font-bold text-lg pt-3 border-t">
										<span>Total Due Now:</span>
										<span>{formatCurrency(calculateTotal())}</span>
									</div>
								</div>
							</div>

							<div className="mb-6">
								<h3 className="font-medium mb-3">Select Payment Method*</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
									{paymentMethods.map((method) => (
										<div
											key={method.id}
											onClick={() =>
												setFormData({ ...formData, paymentMethod: method.id })
											}
											className={`border rounded-lg p-4 cursor-pointer transition-all ${
												formData.paymentMethod === method.id
													? 'border-purple-500 bg-purple-50 ring-2 ring-purple-200'
													: 'border-gray-200 hover:border-purple-300'
											}`}
										>
											<div className="flex items-center mb-2">
												<div className="text-purple-600 mr-2">
													{method.icon}
												</div>
												<h4 className="font-bold">{method.name}</h4>
											</div>
											<p className="text-sm text-gray-600">
												{method.description}
											</p>
										</div>
									))}
								</div>
							</div>

							{formData.paymentMethod === 'bank-transfer' && (
								<div className="bg-purple-50 p-6 rounded-lg mb-6">
									<h3 className="font-bold text-lg mb-3">
										Bank Transfer Instructions
									</h3>
									<ol className="list-decimal list-inside space-y-2 text-sm">
										<li>Bank: Zenith Bank</li>
										<li>Account Name: Nisi Technologies Ltd</li>
										<li>Account Number: 1234567890</li>
										<li>Amount: {formatCurrency(calculateTotal())}</li>
										<li>Use your name as payment reference</li>
									</ol>
									<button
										onClick={downloadInvoice}
										className="mt-4 flex items-center text-purple-600 hover:text-purple-800 text-sm font-medium"
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
							)}

							{formData.paymentMethod === 'flutterwave' && (
								<div className="bg-purple-50 p-6 rounded-lg mb-6">
									<h3 className="font-bold text-lg mb-3">
										Flutterwave Payment
									</h3>
									<p className="text-sm mb-4">
										You`ll be redirected to Flutterwave`s secure payment page to
										complete your transaction.
									</p>
									<button
										className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-medium"
										onClick={() => {
											alert('Redirecting to Flutterwave payment gateway...');
										}}
									>
										Pay with Flutterwave
									</button>
								</div>
							)}

							{formData.paymentMethod === 'pos' && (
								<div className="bg-purple-50 p-6 rounded-lg mb-6">
									<h3 className="font-bold text-lg mb-3">
										POS Payment Instructions
									</h3>
									<p className="text-sm mb-2">
										Visit any of our offices or agent locations to make payment:
									</p>
									<ul className="list-disc list-inside text-sm space-y-1">
										<li>Main Office: 123 Tech Street, Warri</li>
										<li>Branch Office: 456 Digital Road, Asaba</li>
									</ul>
									<p className="text-sm mt-4">
										Bring your invoice number:{' '}
										<span className="font-bold">{formData.invoiceNumber}</span>
									</p>
								</div>
							)}

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
								disabled={!formData.paymentMethod}
								className={`w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-medium ${
									!formData.paymentMethod ? 'opacity-50 cursor-not-allowed' : ''
								}`}
							>
								{formData.paymentMethod === 'flutterwave'
									? "I've Completed Payment - Continue"
									: 'Continue to Receipt Upload'}
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
												className="mt-2 text-sm text-purple-600 hover:text-purple-800"
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
												<label className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none">
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

								<div className="bg-purple-50 p-4 rounded-lg">
									<h3 className="font-medium mb-2">What happens next?</h3>
									<ul className="text-sm space-y-1">
										<li className="flex items-start">
											<svg
												className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0"
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
												className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0"
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
												className="h-4 w-4 text-purple-600 mt-0.5 mr-2 flex-shrink-0"
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
									className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 font-medium"
									onClick={() => router.push('/')}
								>
									Back to Homepage
								</button>
							</form>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<TermsModal
				isOpen={showTerms}
				onClose={() => {
					setShowTerms(false);
					setFormData({ ...formData, agreedToTerms: true });
				}}
			/>
		</div>
	);
}
