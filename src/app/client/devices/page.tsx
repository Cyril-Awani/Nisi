// app/client/devices/page.tsx
'use client';

import { useState, useEffect } from 'react';
import {
	ChevronRight,
	ChevronLeft,
	Smartphone,
	RefreshCw,
	Link as LinkIcon,
	Shield,
	Lock,
	Mail,
	Phone,
	Settings,
	X,
	CheckCircle,
	AlertCircle,
	Crown,
	Star,
	Award,
	Zap,
	Home,
	MapPin,
	Server,
	Router,
	Menu,
} from 'lucide-react';
import { useClient } from '@/contexts/ClientContext';
import { PageHeader } from '../components/page-header';

// Define the plan structure
interface Plan {
	name: string;
	level: string;
	price: string;
	devices: string;
	speed: string;
	data: string;
	support: string;
	isPopular: boolean;
}

export default function ManageServicePage() {
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const [activeSubsection, setActiveSubsection] = useState<string>('');
	const [showContent, setShowContent] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [selectedPlan, setSelectedPlan] = useState<string>('');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const { clientData } = useClient();

	// Your plans data
	const plans: Plan[] = [
		{
			name: 'Bronze',
			level: 'Basic',
			price: '₦13,922/mo',
			devices: 'Up to 5 Devices',
			speed: '5 Mbps Download Speed',
			data: 'Unlimited data',
			support: '24/7 support',
			isPopular: false,
		},
		{
			name: 'Silver',
			level: 'Standard',
			price: '₦18,222/mo',
			devices: 'Up to 10 Devices',
			speed: '10 Mbps Download Speed',
			data: 'Unlimited data',
			support: 'Priority support',
			isPopular: true,
		},
		{
			name: 'Gold',
			level: 'Premium',
			price: '₦32,197/mo',
			devices: 'Up to 20 Devices',
			speed: '20 Mbps Download Speed',
			data: 'Unlimited data',
			support: 'VIP support',
			isPopular: false,
		},
		{
			name: 'Platinum',
			level: 'Ultimate',
			price: '₦38,647/mo',
			devices: 'Up to 50 Devices',
			speed: '50 Mbps Download Speed',
			data: 'Unlimited data',
			support: 'VVIP support',
			isPopular: false,
		},
	];

	// Get current user's plan from context
	const currentPlan = clientData?.subscription || 'Gold';
	const currentPlanData =
		plans.find((plan) =>
			currentPlan.toLowerCase().includes(plan.name.toLowerCase())
		) || plans[2]; // Default to Gold if not found

	// Sample device data
	const [devices, setDevices] = useState([
		{
			id: 1,
			name: 'iPhone 14 Pro',
			type: 'Smartphone',
			status: 'Connected',
			lastActive: '2 hours ago',
		},
		{
			id: 2,
			name: 'MacBook Pro',
			type: 'Laptop',
			status: 'Connected',
			lastActive: '30 minutes ago',
		},
		{
			id: 3,
			name: 'iPad Air',
			type: 'Tablet',
			status: 'Disconnected',
			lastActive: '2 days ago',
		},
		{
			id: 4,
			name: 'Smart TV',
			type: 'TV',
			status: 'Connected',
			lastActive: '1 hour ago',
		},
	]);

	// Menu structure with submenus
	const menuSections = [
		{
			id: 'service-overview',
			title: 'Service Overview',
			icon: Home,
			description: 'View service address and connected devices',
			color: 'bg-purple-500',
			hasSubsections: false,
		},
		{
			id: 'switch-plans',
			title: 'Switch Plans',
			icon: RefreshCw,
			description: 'Upgrade or downgrade your subscription plan',
			color: 'bg-blue-500',
			hasSubsections: false,
		},
		{
			id: 'relocation',
			title: 'Service Relocation',
			icon: MapPin,
			description: 'Request to move your service to new location',
			color: 'bg-green-500',
			hasSubsections: false,
		},
		{
			id: 'link-service',
			title: 'Link New Service',
			icon: LinkIcon,
			description: 'Add new services and devices to your account',
			color: 'bg-orange-500',
			hasSubsections: false,
		},
		{
			id: 'security',
			title: 'Password & Security',
			icon: Shield,
			description: 'Manage your account security settings',
			color: 'bg-red-500',
			hasSubsections: true,
			subsections: [
				{
					id: 'change-password',
					title: 'Change Password',
					icon: Lock,
					description: 'Update your account password',
				},
				{
					id: 'update-email',
					title: 'Update Email',
					icon: Mail,
					description: 'Change your primary email address',
				},
				{
					id: 'update-phone',
					title: 'Update Phone',
					icon: Phone,
					description: 'Change your registered phone number',
				},
			],
		},
	];

	const handleSectionClick = (sectionId: string) => {
		setActiveSection(sectionId);
		setActiveSubsection('');
		setShowContent(true);
		setIsMobileMenuOpen(false);
	};

	const handleSubsectionClick = (sectionId: string, subsectionId: string) => {
		setActiveSection(sectionId);
		setActiveSubsection(subsectionId);
		setShowContent(true);
		setIsMobileMenuOpen(false);
	};

	const handleBackToMenu = () => {
		setShowContent(false);
		setTimeout(() => {
			setActiveSection(null);
			setActiveSubsection('');
		}, 300);
	};

	const showSuccess = (message: string) => {
		setSuccessMessage(message);
		setShowSuccessMessage(true);
		setTimeout(() => setShowSuccessMessage(false), 3000);
	};

	const handlePlanSelect = (planName: string) => {
		setSelectedPlan(planName);
		const plan = plans.find((p) => p.name === planName);
		if (plan) {
			if (plan.name === currentPlanData?.name) {
				showSuccess(`You&apos;re already on the ${plan.name} plan`);
			} else {
				showSuccess(
					`${plan.name} plan selected! Changes will apply at next billing cycle.`
				);
			}
		}
	};

	const handlePlanSwitch = () => {
		if (!selectedPlan) {
			showSuccess('Please select a plan first');
			return;
		}
		if (selectedPlan === currentPlanData?.name) {
			showSuccess(`You&apos;re already on the ${selectedPlan} plan`);
			return;
		}

		showSuccess(
			`Successfully switched to ${selectedPlan} plan! Changes effective next billing cycle.`
		);
		setSelectedPlan('');
	};

	const removeDevice = (deviceId: number) => {
		setDevices(devices.filter((device) => device.id !== deviceId));
		showSuccess('Device removed from service');
	};

	const disconnectDevice = (deviceId: number) => {
		setDevices(
			devices.map((device) =>
				device.id === deviceId ? { ...device, status: 'Disconnected' } : device
			)
		);
		showSuccess('Device disconnected from service');
	};

	const connectDevice = (deviceId: number) => {
		setDevices(
			devices.map((device) =>
				device.id === deviceId
					? { ...device, status: 'Connected', lastActive: 'Just now' }
					: device
			)
		);
		showSuccess('Device connected to service');
	};

	// Close mobile menu when screen resizes to desktop
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setIsMobileMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Render the active section content
	const renderContent = () => {
		const currentSection = menuSections.find((s) => s.id === activeSection);

		switch (activeSection) {
			case 'service-overview':
				return (
					<div className="space-y-6">
						{/* Service Address Section with Link New Service button */}
						<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
										<Home size={20} className="sm:w-6 sm:h-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg sm:text-xl font-bold text-gray-900">
											Service Address
										</h3>
										<p className="text-sm sm:text-base text-gray-500">
											Your current service location
										</p>
									</div>
								</div>
								<button
									onClick={() => handleSectionClick('link-service')}
									className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
								>
									<LinkIcon size={16} />
									Link New Service
								</button>
							</div>

							<div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
								<div className="flex items-start gap-3">
									<MapPin
										size={18}
										className="sm:w-5 sm:h-5 text-gray-500 mt-1 flex-shrink-0"
									/>
									<div className="min-w-0">
										<p className="font-medium text-gray-900 truncate">
											{clientData?.network?.location || 'Lagos, Nigeria'}
										</p>
										<p className="text-xs sm:text-sm text-gray-500 mt-1 break-all">
											IP: {clientData?.network?.ipAddress || '192.168.1.100'} •
											MAC: {clientData?.network?.macId || '00:1B:44:11:3A:B7'}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Connected Devices Section */}
						<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
									<Server size={20} className="sm:w-6 sm:h-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg sm:text-xl font-bold text-gray-900">
										Connected Devices
									</h3>
									<p className="text-sm sm:text-base text-gray-500">
										Manage all your connected devices
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
								{devices.map((device) => (
									<div
										key={device.id}
										className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
									>
										<div className="flex items-start justify-between mb-3">
											<div className="flex items-center gap-3 min-w-0">
												<div
													className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
														device.status === 'Connected'
															? 'bg-green-100'
															: 'bg-gray-100'
													}`}
												>
													{device.type === 'Smartphone' && (
														<Smartphone
															size={18}
															className={
																device.status === 'Connected'
																	? 'text-green-600'
																	: 'text-gray-600'
															}
														/>
													)}
													{device.type === 'Laptop' && (
														<Router
															size={18}
															className={
																device.status === 'Connected'
																	? 'text-green-600'
																	: 'text-gray-600'
															}
														/>
													)}
													{device.type === 'Tablet' && (
														<Smartphone
															size={18}
															className={
																device.status === 'Connected'
																	? 'text-green-600'
																	: 'text-gray-600'
															}
														/>
													)}
													{device.type === 'TV' && (
														<Smartphone
															size={18}
															className={
																device.status === 'Connected'
																	? 'text-green-600'
																	: 'text-gray-600'
															}
														/>
													)}
												</div>
												<div className="min-w-0">
													<h4 className="font-semibold text-gray-900 truncate">
														{device.name}
													</h4>
													<div className="flex items-center gap-2 mt-1 flex-wrap">
														<span className="text-sm text-gray-500">
															{device.type}
														</span>
														<span
															className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
																device.status === 'Connected'
																	? 'bg-green-100 text-green-800'
																	: 'bg-gray-100 text-gray-800'
															}`}
														>
															{device.status}
														</span>
													</div>
												</div>
											</div>
										</div>

										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
											<span className="text-sm text-gray-500">
												Last active: {device.lastActive}
											</span>
											<div className="flex gap-2">
												{device.status === 'Connected' ? (
													<button
														onClick={() => disconnectDevice(device.id)}
														className="flex-1 sm:flex-none px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
													>
														Disconnect
													</button>
												) : (
													<button
														onClick={() => connectDevice(device.id)}
														className="flex-1 sm:flex-none px-3 py-1.5 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
													>
														Connect
													</button>
												)}
												<button
													onClick={() => removeDevice(device.id)}
													className="flex-1 sm:flex-none px-3 py-1.5 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 cursor-pointer"
												>
													Remove
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				);

			case 'switch-plans':
				return (
					<div className="space-y-6">
						{/* Current Plan Banner */}
						<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 md:p-6 text-white">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
								<div>
									<div className="flex items-center gap-3 mb-2">
										<Crown
											size={20}
											className="sm:w-6 sm:h-6 text-yellow-300"
										/>
										<h3 className="text-xl md:text-2xl font-bold">
											Your Current Plan
										</h3>
									</div>
									<p className="text-purple-100">Active subscription details</p>
								</div>
								<div className="text-left md:text-right">
									<div className="text-2xl md:text-3xl font-bold mb-1">
										{currentPlanData.price}
									</div>
									<div className="text-sm text-purple-200">
										Next billing: {clientData?.expirationDate || '2025-12-31'}
									</div>
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
									<div className="text-xs md:text-sm text-purple-200">Plan</div>
									<div className="text-lg md:text-xl font-bold mt-1">
										{currentPlanData.name}
									</div>
								</div>
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
									<div className="text-xs md:text-sm text-purple-200">
										Speed
									</div>
									<div className="text-lg md:text-xl font-bold mt-1">
										{currentPlanData.speed}
									</div>
								</div>
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
									<div className="text-xs md:text-sm text-purple-200">
										Devices
									</div>
									<div className="text-lg md:text-xl font-bold mt-1">
										{clientData?.devices || 3}/
										{currentPlanData.devices.split(' ')[2]}
									</div>
								</div>
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
									<div className="text-xs md:text-sm text-purple-200">
										Support
									</div>
									<div className="text-lg md:text-xl font-bold mt-1">
										{currentPlanData.support}
									</div>
								</div>
							</div>
						</div>

						{/* Plan Comparison */}
						<div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
							<div className="text-center mb-6 md:mb-10">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
									Switch Plans
								</h3>
								<p className="text-gray-600 md:text-lg">
									Upgrade or downgrade your subscription plan
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
								{plans.map((plan) => {
									const isCurrentPlan = plan.name === currentPlanData?.name;
									const isSelected = plan.name === selectedPlan;

									return (
										<div
											key={plan.name}
											className={`relative rounded-2xl p-4 md:p-6 border-2 transition-all duration-300 ${
												isCurrentPlan
													? 'border-purple-500 bg-purple-50 shadow-lg'
													: isSelected
													? 'border-blue-500 bg-blue-50 shadow-md'
													: 'border-gray-200 hover:border-gray-300 hover:shadow-md'
											}`}
										>
											{/* Popular Badge */}
											{plan.isPopular && (
												<div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
													<div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
														<Star size={10} className="fill-white" />
														MOST POPULAR
													</div>
												</div>
											)}

											{/* Current Plan Badge */}
											{isCurrentPlan && (
												<div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
													<div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
														<Award size={10} />
														YOUR PLAN
													</div>
												</div>
											)}

											{/* Plan Header */}
											<div className="text-center mb-4 md:mb-6 pt-2">
												<div
													className={`w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl flex items-center justify-center mb-3 md:mb-4 ${
														plan.name === 'Bronze'
															? 'bg-amber-100'
															: plan.name === 'Silver'
															? 'bg-gray-100'
															: plan.name === 'Gold'
															? 'bg-yellow-100'
															: 'bg-blue-100'
													}`}
												>
													{plan.name === 'Bronze' && (
														<span className="text-xl md:text-2xl">🥉</span>
													)}
													{plan.name === 'Silver' && (
														<span className="text-xl md:text-2xl">🥈</span>
													)}
													{plan.name === 'Gold' && (
														<span className="text-xl md:text-2xl">🥇</span>
													)}
													{plan.name === 'Platinum' && (
														<Zap
															size={24}
															className="md:w-7 md:h-7 text-blue-600"
														/>
													)}
												</div>

												<h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
													{plan.name}
												</h4>
												<div className="mb-3 md:mb-4">
													<span className="text-xl md:text-3xl font-bold text-gray-900">
														{plan.price.split('/')[0]}
													</span>
													<span className="text-gray-500">/mo</span>
												</div>
											</div>

											{/* Plan Features */}
											<ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
												<li className="flex items-start gap-2">
													<CheckCircle
														size={14}
														className="md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0"
													/>
													<span className="text-sm md:text-base text-gray-700">
														{plan.devices}
													</span>
												</li>
												<li className="flex items-start gap-2">
													<CheckCircle
														size={14}
														className="md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0"
													/>
													<span className="text-sm md:text-base text-gray-700">
														{plan.speed}
													</span>
												</li>
												<li className="flex items-start gap-2">
													<CheckCircle
														size={14}
														className="md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0"
													/>
													<span className="text-sm md:text-base text-gray-700">
														{plan.data}
													</span>
												</li>
												<li className="flex items-start gap-2">
													<CheckCircle
														size={14}
														className="md:w-4 md:h-4 text-green-500 mt-1 flex-shrink-0"
													/>
													<span className="text-sm md:text-base text-gray-700">
														{plan.support}
													</span>
												</li>
											</ul>

											{/* Action Button */}
											<button
												onClick={() => handlePlanSelect(plan.name)}
												className={`w-full py-2 md:py-3 rounded-xl font-bold transition-all cursor-pointer text-sm md:text-base ${
													isCurrentPlan
														? 'bg-gray-100 text-gray-900 border border-gray-300'
														: isSelected
														? 'bg-blue-600 text-white hover:bg-blue-700'
														: 'bg-gray-900 text-white hover:bg-gray-800'
												}`}
											>
												{isCurrentPlan
													? 'Current Plan'
													: isSelected
													? 'Selected'
													: 'Select Package'}
											</button>
										</div>
									);
								})}
							</div>

							{/* Selected Plan Summary */}
							{selectedPlan && selectedPlan !== currentPlanData?.name && (
								<div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
										<div>
											<h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
												Ready to Switch?
											</h4>
											<p className="text-gray-600">
												You&apos;re switching from{' '}
												<span className="font-semibold">
													{currentPlanData?.name}
												</span>{' '}
												to <span className="font-semibold">{selectedPlan}</span>
											</p>
										</div>
										<button
											onClick={handlePlanSwitch}
											className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-shadow cursor-pointer text-sm md:text-base"
										>
											Confirm Switch
										</button>
									</div>
								</div>
							)}

							{/* Important Information */}
							<div className="mt-6 md:mt-8 p-4 md:p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
								<div className="flex items-start gap-3 md:gap-4">
									<AlertCircle
										size={20}
										className="md:w-6 md:h-6 text-yellow-600 flex-shrink-0 mt-1"
									/>
									<div>
										<h4 className="font-bold text-yellow-900 mb-2">
											Important Information
										</h4>
										<ul className="space-y-1 md:space-y-2 text-yellow-800 text-sm md:text-base">
											<li>
												• Plan changes take effect at the start of your next
												billing cycle
											</li>
											<li>
												• Any prorated charges will be reflected in your next
												invoice
											</li>
											<li>
												• Your current data usage will carry over to the new
												plan
											</li>
											<li>• You can switch plans once per billing cycle</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			case 'relocation':
				return (
					<div className="space-y-6">
						<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
									<MapPin size={20} className="sm:w-6 sm:h-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg sm:text-xl font-bold text-gray-900">
										Service Relocation
									</h3>
									<p className="text-sm sm:text-base text-gray-500">
										Request to move your service to a new location
									</p>
								</div>
							</div>

							<div className="max-w-2xl">
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Current Service Address
										</label>
										<input
											type="text"
											className="w-full p-3 border border-gray-300 rounded-lg"
											placeholder="Enter your current address"
											defaultValue={
												clientData?.network?.location || 'Lagos, Nigeria'
											}
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											New Service Address
										</label>
										<input
											type="text"
											className="w-full p-3 border border-gray-300 rounded-lg"
											placeholder="Enter your new service address"
										/>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Preferred Relocation Date
											</label>
											<input
												type="date"
												className="w-full p-3 border border-gray-300 rounded-lg"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Contact Number
											</label>
											<input
												type="tel"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="+234 800 000 0000"
												defaultValue="+234 800 123 4567"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Additional Notes
										</label>
										<textarea
											className="w-full p-3 border border-gray-300 rounded-lg h-32"
											placeholder="Any special instructions for service relocation..."
										/>
									</div>
								</div>
								<div className="mt-6 flex flex-col sm:flex-row gap-3">
									<button
										onClick={() =>
											showSuccess('Service relocation request submitted')
										}
										className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium cursor-pointer"
									>
										Submit Relocation Request
									</button>
									<button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium cursor-pointer">
										Save Draft
									</button>
								</div>
							</div>
						</div>
					</div>
				);

			case 'link-service':
				return (
					<div className="space-y-6">
						<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
									<LinkIcon
										size={20}
										className="sm:w-6 sm:h-6 text-orange-600"
									/>
								</div>
								<div>
									<h3 className="text-lg sm:text-xl font-bold text-gray-900">
										Link New Service
									</h3>
									<p className="text-sm sm:text-base text-gray-500">
										Add new services and devices to your account
									</p>
								</div>
							</div>

							<div className="max-w-2xl">
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Service Name
										</label>
										<input
											type="text"
											className="w-full p-3 border border-gray-300 rounded-lg"
											placeholder="e.g., Home WiFi, Office Network"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Service Type
										</label>
										<select className="w-full p-3 border border-gray-300 rounded-lg">
											<option value="">Select service type</option>
											<option value="wifi">WiFi Network</option>
											<option value="ethernet">Ethernet Connection</option>
											<option value="vpn">VPN Service</option>
											<option value="iot">IoT Device Service</option>
											<option value="other">Other Service</option>
										</select>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Device MAC Address
										</label>
										<input
											type="text"
											className="w-full p-3 border border-gray-300 rounded-lg"
											placeholder="00:1A:2B:3C:4D:5E"
										/>
										<p className="text-xs text-gray-500 mt-1">
											Find this on your device&apos;s network settings
										</p>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Service Description
										</label>
										<textarea
											className="w-full p-3 border border-gray-300 rounded-lg h-24"
											placeholder="Describe the service or device you want to link..."
										/>
									</div>
								</div>
								<div className="mt-6">
									<h4 className="font-medium text-gray-900 mb-3">
										Quick Link Options
									</h4>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<button
											onClick={() =>
												showSuccess('QR code generated for device linking')
											}
											className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left cursor-pointer"
										>
											<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
												<span className="text-2xl">📱</span>
											</div>
											<div>
												<p className="font-medium text-gray-900">
													Scan QR Code
												</p>
												<p className="text-sm text-gray-500">
													Quick link with mobile device
												</p>
											</div>
										</button>
										<button
											onClick={() =>
												showSuccess('Manual linking mode activated')
											}
											className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left cursor-pointer"
										>
											<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
												<Settings size={20} className="text-purple-600" />
											</div>
											<div>
												<p className="font-medium text-gray-900">
													Manual Setup
												</p>
												<p className="text-sm text-gray-500">
													Enter details manually
												</p>
											</div>
										</button>
									</div>
								</div>
								<div className="mt-6 flex flex-col sm:flex-row gap-3">
									<button
										onClick={() => showSuccess('New service linking initiated')}
										className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium cursor-pointer"
									>
										Link New Service
									</button>
									<button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium cursor-pointer">
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
				);

			case 'security':
				// Render specific security subsection
				switch (activeSubsection) {
					case 'change-password':
						return (
							<div className="space-y-6">
								<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
											<Lock size={20} className="sm:w-6 sm:h-6 text-red-600" />
										</div>
										<div>
											<h3 className="text-lg sm:text-xl font-bold text-gray-900">
												Change Password
											</h3>
											<p className="text-sm sm:text-base text-gray-500">
												Update your service account password
											</p>
										</div>
									</div>

									<div className="max-w-md space-y-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Current Password
											</label>
											<input
												type="password"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="Enter current password"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												New Password
											</label>
											<input
												type="password"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="Enter new password"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Confirm New Password
											</label>
											<input
												type="password"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="Confirm new password"
											/>
										</div>
										<div className="mt-6">
											<button
												onClick={() =>
													showSuccess(
														'Service account password updated successfully'
													)
												}
												className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium cursor-pointer"
											>
												Update Password
											</button>
										</div>
									</div>
								</div>
							</div>
						);

					case 'update-email':
						return (
							<div className="space-y-6">
								<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
											<Mail size={20} className="sm:w-6 sm:h-6 text-red-600" />
										</div>
										<div>
											<h3 className="text-lg sm:text-xl font-bold text-gray-900">
												Update Email Address
											</h3>
											<p className="text-sm sm:text-base text-gray-500">
												Change your primary service email address
											</p>
										</div>
									</div>

									<div className="max-w-md space-y-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Current Email
											</label>
											<input
												type="email"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="current@email.com"
												defaultValue={clientData?.email || 'client@example.com'}
												disabled
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												New Email Address
											</label>
											<input
												type="email"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="new@email.com"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Confirm Email Address
											</label>
											<input
												type="email"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="Confirm new email"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Current Password
											</label>
											<input
												type="password"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="Enter password to confirm"
											/>
										</div>
										<div className="mt-6">
											<button
												onClick={() =>
													showSuccess('Verification email sent to new address')
												}
												className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium cursor-pointer"
											>
												Update Email
											</button>
										</div>
									</div>
								</div>
							</div>
						);

					case 'update-phone':
						return (
							<div className="space-y-6">
								<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
											<Phone size={20} className="sm:w-6 sm:h-6 text-red-600" />
										</div>
										<div>
											<h3 className="text-lg sm:text-xl font-bold text-gray-900">
												Update Phone Number
											</h3>
											<p className="text-sm sm:text-base text-gray-500">
												Change your registered service phone number
											</p>
										</div>
									</div>

									<div className="max-w-md space-y-4">
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Current Phone Number
											</label>
											<input
												type="tel"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="+234 800 000 0000"
												defaultValue="+234 800 123 4567"
												disabled
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												New Phone Number
											</label>
											<input
												type="tel"
												className="w-full p-3 border border-gray-300 rounded-lg"
												placeholder="+234 800 000 0000"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Verification Method
											</label>
											<select className="w-full p-3 border border-gray-300 rounded-lg">
												<option value="sms">SMS Verification</option>
												<option value="call">Phone Call Verification</option>
											</select>
										</div>
										<div className="mt-6">
											<button
												onClick={() =>
													showSuccess('Verification code sent to new number')
												}
												className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium cursor-pointer"
											>
												Send Verification Code
											</button>
										</div>
									</div>
								</div>
							</div>
						);

					default:
						// Default security overview
						return (
							<div className="space-y-6">
								<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
									<div className="flex items-center gap-3 mb-6">
										<div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
											<Shield
												size={20}
												className="sm:w-6 sm:h-6 text-red-600"
											/>
										</div>
										<div>
											<h3 className="text-lg sm:text-xl font-bold text-gray-900">
												Service Security
											</h3>
											<p className="text-sm sm:text-base text-gray-500">
												Manage your service account security settings
											</p>
										</div>
									</div>

									<div className="max-w-2xl space-y-4">
										<button
											onClick={() =>
												handleSubsectionClick('security', 'change-password')
											}
											className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
										>
											<div className="flex items-center gap-3">
												<Lock size={20} className="text-red-600" />
												<div>
													<p className="font-medium text-gray-900">
														Change Password
													</p>
													<p className="text-sm text-gray-500">
														Update your service account password
													</p>
												</div>
											</div>
											<ChevronRight size={20} className="text-gray-400" />
										</button>

										<button
											onClick={() =>
												handleSubsectionClick('security', 'update-email')
											}
											className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
										>
											<div className="flex items-center gap-3">
												<Mail size={20} className="text-red-600" />
												<div>
													<p className="font-medium text-gray-900">
														Update Email
													</p>
													<p className="text-sm text-gray-500">
														Change your primary service email
													</p>
												</div>
											</div>
											<ChevronRight size={20} className="text-gray-400" />
										</button>

										<button
											onClick={() =>
												handleSubsectionClick('security', 'update-phone')
											}
											className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
										>
											<div className="flex items-center gap-3">
												<Phone size={20} className="text-red-600" />
												<div>
													<p className="font-medium text-gray-900">
														Update Phone
													</p>
													<p className="text-sm text-gray-500">
														Change your registered service phone
													</p>
												</div>
											</div>
											<ChevronRight size={20} className="text-gray-400" />
										</button>

										<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
											<div className="flex items-start gap-3">
												<AlertCircle
													size={20}
													className="text-yellow-600 mt-0.5"
												/>
												<div>
													<p className="font-medium text-yellow-800">
														Service Security Alert
													</p>
													<p className="text-sm text-yellow-700 mt-1">
														For your service security, please update your
														password every 90 days. Last changed: 60 days ago.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
				}

			default:
				// Default content when section has subsections but none selected
				if (currentSection?.hasSubsections && !activeSubsection) {
					return (
						<div className="space-y-6">
							<div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
								<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
									{currentSection?.title}
								</h3>
								<p className="text-gray-500 mb-6 md:mb-8">
									{currentSection?.description}
								</p>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
									{currentSection.subsections?.map((subsection) => (
										<button
											key={subsection.id}
											onClick={() =>
												handleSubsectionClick(currentSection.id, subsection.id)
											}
											className="group border border-gray-200 rounded-xl p-4 md:p-6 hover:border-purple-300 hover:bg-purple-50 transition-all hover:shadow-md text-left cursor-pointer"
										>
											<div className="flex items-center gap-3 md:gap-4 mb-4">
												<div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
													<subsection.icon
														size={20}
														className="md:w-6 md:h-6 text-purple-600"
													/>
												</div>
												<h4 className="font-semibold text-gray-900 group-hover:text-purple-700 text-sm md:text-base">
													{subsection.title}
												</h4>
											</div>
											<p className="text-gray-600 text-xs md:text-sm">
												{subsection.description}
											</p>
											<div className="mt-4 flex items-center text-purple-600 font-medium text-sm md:text-base">
												<span>Configure</span>
												<ChevronRight
													size={14}
													className="md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform"
												/>
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					);
				}

				return (
					<div className="h-full flex items-center justify-center p-4">
						<div className="text-center">
							<div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
								<Home size={24} className="md:w-10 md:h-10 text-gray-400" />
							</div>
							<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
								Select a Service Option
							</h3>
							<p className="text-gray-500 text-sm md:text-base">
								Choose an option from the menu to manage your service
							</p>
						</div>
					</div>
				);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
			{/* Success Message */}
			{showSuccessMessage && (
				<div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 animate-slide-in">
					<div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg max-w-xs md:max-w-md">
						<CheckCircle
							size={20}
							className="md:w-6 md:h-6 text-green-600 flex-shrink-0"
						/>
						<div className="min-w-0">
							<p className="font-medium truncate">Success!</p>
							<p className="text-sm truncate">{successMessage}</p>
						</div>
						<button
							onClick={() => setShowSuccessMessage(false)}
							className="ml-2 hover:bg-green-100 p-1 rounded cursor-pointer flex-shrink-0"
						>
							<X size={16} className="md:w-5 md:h-5" />
						</button>
					</div>
				</div>
			)}

			{/* Mobile Menu Button */}
			<button
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer"
			>
				<Menu size={20} />
			</button>

			<div className="relative h-screen overflow-hidden">
				{/* Menu Panel (Full width when content is hidden) */}
				<div
					className={`absolute inset-0 transition-all duration-500 ease-in-out ${
						showContent ? '-translate-x-full' : 'translate-x-0'
					}`}
				>
					<div className="container mx-auto px-4 md:px-6 py-8 md:py-12 h-full flex flex-col overflow-y-auto">
						<PageHeader
							title="Manage Service"
							description="Manage your devices, plans, and security settings"
							icon={Home}
						/>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 flex-1">
							{menuSections.map((section) => (
								<button
									key={section.id}
									onClick={() =>
										section.hasSubsections
											? handleSectionClick(section.id)
											: handleSectionClick(section.id)
									}
									className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg md:hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
								>
									<div className="flex items-start justify-between mb-3 md:mb-4">
										<div
											className={`w-10 h-10 md:w-14 md:h-14 ${section.color} rounded-lg md:rounded-xl flex items-center justify-center`}
										>
											<section.icon
												size={20}
												className="md:w-7 md:h-7 text-white"
											/>
										</div>
										{section.hasSubsections && (
											<ChevronRight
												size={16}
												className="md:w-5 md:h-5 text-gray-400 group-hover:text-gray-600"
											/>
										)}
									</div>

									<h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
										{section.title}
									</h3>
									<p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 line-clamp-2">
										{section.description}
									</p>

									<div className="flex items-center text-purple-600 font-medium text-sm md:text-base">
										<span>Open</span>
										<ChevronRight
											size={14}
											className="md:w-4 md:h-4 ml-2 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform"
										/>
									</div>
								</button>
							))}
						</div>

						<div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
							<p className="text-gray-500 text-center text-sm md:text-base">
								Click any card to manage your service and settings
							</p>
						</div>
					</div>
				</div>

				{/* Content Panel (Slides in from right) */}
				<div
					className={`absolute inset-0 transition-all duration-500 ease-in-out ${
						showContent ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
						{/* Content Header */}
						<div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 md:px-6 py-3 md:py-4">
							<div className="flex items-center justify-between">
								<button
									onClick={handleBackToMenu}
									className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
								>
									<ChevronLeft size={16} className="md:w-5 md:h-5" />
									<span className="font-medium text-sm md:text-base">
										Back to Menu
									</span>
								</button>
								<div className="text-center max-w-[60%]">
									<h2 className="text-lg md:text-xl font-bold text-gray-900 truncate">
										{activeSubsection
											? menuSections
													.find((s) => s.id === activeSection)
													?.subsections?.find(
														(sub) => sub.id === activeSubsection
													)?.title
											: menuSections.find((s) => s.id === activeSection)?.title}
									</h2>
									<p className="text-xs md:text-sm text-gray-500 truncate">
										{activeSubsection
											? menuSections
													.find((s) => s.id === activeSection)
													?.subsections?.find(
														(sub) => sub.id === activeSubsection
													)?.description
											: menuSections.find((s) => s.id === activeSection)
													?.description}
									</p>
								</div>
								<div className="w-8 md:w-24"></div> {/* Spacer for alignment */}
							</div>
						</div>

						{/* Content Body */}
						<div className="p-4 md:p-6">{renderContent()}</div>
					</div>
				</div>

				{/* Mobile Overlay */}
				{isMobileMenuOpen && (
					<div
						onClick={() => setIsMobileMenuOpen(false)}
						className="fixed inset-0 bg-black/50 z-30 lg:hidden cursor-pointer"
					/>
				)}
			</div>
		</div>
	);
}
