'use client';

import { useClient } from '@/contexts/ClientContext';
import { User, Mail, Phone, MapPin, Calendar, Users, Edit } from 'lucide-react';
import { PageHeader } from '../components/page-header';

export default function ProfilePage() {
	const { clientData } = useClient();

	// Sample data - in real app, this would come from your backend
	const profileData = {
		personalInfo: {
			fullName: clientData?.name || 'William Dunchez',
			email: clientData?.email || 'william.dunchez@example.com',
			phone: '+234 812 345 6789',
			alternatePhone: '+234 807 654 3210',
			address: '123 Victoria Island, Lagos, Nigeria',
			joinDate: clientData?.joinDate || '2023-01-15',
		},
		accountInfo: {
			clientId: clientData?.id || 'CLIENT-001',
			subscription: clientData?.subscription || 'Nisi Gold',
			subscriptionStart: clientData?.subscriptionStart || '2025-01-01',
			expirationDate: clientData?.expirationDate || '2025-12-31',
			status: 'Active',
		},
		referralInfo: {
			totalReferrals: 12,
			pendingReferrals: 3,
			completedReferrals: 9,
			referralBonus: '₦24,000',
			referralCode: 'NISI-WD001',
		},
		usageStats: {
			dataUsage: clientData?.dataUsage || '245GB / 300GB',
			devices: clientData?.devices || 3,
			lastLogin: clientData?.lastLogin || '2024-01-20',
		},
	};

	return (
		<div className="min-h-screen bg-gray-50 py-8">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<PageHeader
					title="User Profile"
					description="Manage your personal information and account settings"
					icon={User}
				/>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Left Column - Profile Overview */}
					<div className="lg:col-span-1">
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							{/* Profile Picture */}
							<div className="text-center mb-6">
								<div className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4">
									<span className="text-white text-2xl font-bold">
										{profileData.personalInfo.fullName
											.split(' ')
											.map((name) => name[0])
											.join('')
											.toUpperCase()
											.slice(0, 2)}
									</span>
								</div>
								<h2 className="text-xl font-bold text-gray-900">
									{profileData.personalInfo.fullName}
								</h2>
								<p className="text-gray-500">
									{profileData.accountInfo.subscription}
								</p>
							</div>

							{/* Quick Stats */}
							<div className="space-y-4">
								<div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
									<span className="text-sm text-gray-600">Member Since</span>
									<span className="text-sm font-medium">
										{profileData.personalInfo.joinDate}
									</span>
								</div>
								<div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
									<span className="text-sm text-gray-600">Status</span>
									<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
										{profileData.accountInfo.status}
									</span>
								</div>
								<div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
									<span className="text-sm text-gray-600">Referrals</span>
									<span className="text-sm font-medium">
										{profileData.referralInfo.totalReferrals}
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Detailed Information */}
					<div className="lg:col-span-2 space-y-6">
						{/* Personal Information Card */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-lg font-semibold text-gray-900">
									Personal Information
								</h3>
								<button className="flex items-center gap-2 text-emerald-500 hover:text-emerald-600 font-medium">
									<Edit size={16} />
									Edit
								</button>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<User size={16} />
										<span className="text-sm">Full Name</span>
									</div>
									<p className="font-medium">
										{profileData.personalInfo.fullName}
									</p>
								</div>

								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<Mail size={16} />
										<span className="text-sm">Email Address</span>
									</div>
									<p className="font-medium">
										{profileData.personalInfo.email}
									</p>
								</div>

								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<Phone size={16} />
										<span className="text-sm">Phone Number</span>
									</div>
									<p className="font-medium">
										{profileData.personalInfo.phone}
									</p>
								</div>

								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<Phone size={16} />
										<span className="text-sm">Alternate Phone</span>
									</div>
									<p className="font-medium">
										{profileData.personalInfo.alternatePhone}
									</p>
								</div>

								<div className="md:col-span-2 space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<MapPin size={16} />
										<span className="text-sm">Address</span>
									</div>
									<p className="font-medium">
										{profileData.personalInfo.address}
									</p>
								</div>
							</div>
						</div>

						{/* Account Information Card */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-6">
								Account Information
							</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<User size={16} />
										<span className="text-sm">Client ID</span>
									</div>
									<p className="font-medium">
										{profileData.accountInfo.clientId}
									</p>
								</div>

								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<Calendar size={16} />
										<span className="text-sm">Subscription Plan</span>
									</div>
									<p className="font-medium">
										{profileData.accountInfo.subscription}
									</p>
								</div>

								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<Calendar size={16} />
										<span className="text-sm">Subscription Start</span>
									</div>
									<p className="font-medium">
										{profileData.accountInfo.subscriptionStart}
									</p>
								</div>

								<div className="space-y-1">
									<div className="flex items-center gap-2 text-gray-500">
										<Calendar size={16} />
										<span className="text-sm">Expiration Date</span>
									</div>
									<p className="font-medium">
										{profileData.accountInfo.expirationDate}
									</p>
								</div>
							</div>
						</div>

						{/* Referral Information Card */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-6">
								Referral Program
							</h3>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
								<div className="text-center p-4 bg-emerald-50 rounded-lg">
									<p className="text-2xl font-bold text-emerald-600">
										{profileData.referralInfo.totalReferrals}
									</p>
									<p className="text-sm text-gray-600">Total Referrals</p>
								</div>
								<div className="text-center p-4 bg-blue-50 rounded-lg">
									<p className="text-2xl font-bold text-blue-600">
										{profileData.referralInfo.completedReferrals}
									</p>
									<p className="text-sm text-gray-600">Completed</p>
								</div>
								<div className="text-center p-4 bg-yellow-50 rounded-lg">
									<p className="text-2xl font-bold text-yellow-600">
										{profileData.referralInfo.pendingReferrals}
									</p>
									<p className="text-sm text-gray-600">Pending</p>
								</div>
								<div className="text-center p-4 bg-purple-50 rounded-lg">
									<p className="text-2xl font-bold text-purple-600">
										{profileData.referralInfo.referralBonus}
									</p>
									<p className="text-sm text-gray-600">Total Bonus</p>
								</div>
							</div>

							<div className="space-y-3">
								<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
									<span className="text-sm text-gray-600">
										Your Referral Code
									</span>
									<code className="font-mono font-bold text-emerald-600">
										{profileData.referralInfo.referralCode}
									</code>
								</div>
								<p className="text-sm text-gray-600 text-center">
									Share your referral code with friends and earn bonuses when
									they sign up!
								</p>
							</div>
						</div>

						{/* Usage Statistics Card */}
						<div className="bg-white rounded-xl border border-gray-200 p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-6">
								Usage Statistics
							</h3>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="space-y-1 text-center p-4 bg-gray-50 rounded-lg">
									<div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
										<Users size={16} />
										<span className="text-sm">Connected Devices</span>
									</div>
									<p className="text-2xl font-bold text-gray-900">
										{profileData.usageStats.devices}
									</p>
								</div>

								<div className="space-y-1 text-center p-4 bg-gray-50 rounded-lg">
									<div className="text-gray-500 mb-2">
										<span className="text-sm">Data Usage</span>
									</div>
									<p className="text-2xl font-bold text-gray-900">
										{profileData.usageStats.dataUsage}
									</p>
								</div>

								<div className="space-y-1 text-center p-4 bg-gray-50 rounded-lg">
									<div className="flex items-center justify-center gap-2 text-gray-500 mb-2">
										<Calendar size={16} />
										<span className="text-sm">Last Login</span>
									</div>
									<p className="text-lg font-bold text-gray-900">
										{profileData.usageStats.lastLogin}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
