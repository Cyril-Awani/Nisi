'use client';

import {
	LayoutDashboard,
	Receipt,
	HelpCircle,
	ChevronDown,
	Power,
	Menu,
	X,
	User,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useClient } from '@/contexts/ClientContext';
import Link from 'next/link';

export default function Sidebar() {
	const [activeItem, setActiveItem] = useState('Dashboard');
	const [supportOpen, setSupportOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { clientData, logout } = useClient();
	const router = useRouter();
	const pathname = usePathname();

	const menuItems = [
		{ name: 'Dashboard', icon: LayoutDashboard, path: '/client' },
		{ name: 'Billings', icon: Receipt, path: '/client/billing' },
	];

	// Update active item based on current pathname
	useEffect(() => {
		// Check menu items
		const currentMenuItem = menuItems.find((item) => pathname === item.path);
		if (currentMenuItem) {
			setActiveItem(currentMenuItem.name);
			return;
		}

		// Check profile page
		if (pathname === '/client/profile') {
			setActiveItem('Profile');
			return;
		}

		// Check support items
		if (pathname.startsWith('/client/support')) {
			setActiveItem('Support');
			setSupportOpen(true);
		}
	}, [pathname]);

	const handleNavigation = (path: string, name: string) => {
		setActiveItem(name);
		router.push(path);
		setMobileMenuOpen(false);
	};

	const handleLogout = () => {
		logout();
		router.push('/');
		setMobileMenuOpen(false);
	};

	const getInitials = (name: string) => {
		return name
			.split(' ')
			.map((word) => word[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	// Check if current path matches for active styling
	const isActive = (path: string, name: string) => {
		return activeItem === name || pathname === path;
	};

	return (
		<>
			{/* Mobile Header with Logo and Menu Button */}
			<div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
				{/* Logo on the left */}
				<Image
					src="/images/nisi-logo.png"
					alt="NISI Logo"
					width={120}
					height={60}
					className="w-16 h-auto"
				/>

				{/* Hamburger menu button on the right */}
				<button
					onClick={() => setMobileMenuOpen(true)}
					className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
				>
					<Menu size={20} className="text-gray-600" />
				</button>
			</div>

			{/* Mobile Overlay */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`fixed lg:relative w-64 bg-white border-r border-gray-200 flex flex-col h-full z-50 transition-transform duration-300 ${
					mobileMenuOpen
						? 'translate-x-0'
						: '-translate-x-full lg:translate-x-0'
				}`}
			>
				{/* Logo and close button - Hidden on mobile since we have header */}
				<div className="p-6 flex items-center justify-between lg:flex">
					{/* Desktop Logo as Link to Homepage */}
					<Link href="/" className="lg:block hidden">
						<Image
							src="/images/nisi-logo.png"
							alt="NISI Logo"
							width={140}
							height={70}
							className="w-20 h-auto hover:opacity-80 transition-opacity"
						/>
					</Link>

					{/* Mobile Logo (not a link) */}
					<Image
						src="/images/nisi-logo.png"
						alt="NISI Logo"
						width={120}
						height={60}
						className="w-16 h-auto lg:hidden"
					/>

					<button
						onClick={() => setMobileMenuOpen(false)}
						className="lg:hidden p-1 rounded-lg hover:bg-gray-100"
					>
						<X size={20} className="text-purple-600" />
					</button>
				</div>

				{/* Navigation Menu */}
				<nav className="flex-1 px-4 mt-16 lg:mt-0">
					{/* Menu Section */}
					<p className="text-xs font-medium text-gray-400 mb-3 px-3">MENU</p>
					{menuItems.map((item) => (
						<button
							key={item.name}
							onClick={() => handleNavigation(item.path, item.name)}
							className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg mb-2 transition-colors ${
								isActive(item.path, item.name)
									? 'bg-purple-500 text-white'
									: 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							<item.icon size={20} />
							<span className="text-sm font-medium">{item.name}</span>
						</button>
					))}

					{/* Support Section */}
					<button
						onClick={() => setSupportOpen(!supportOpen)}
						className={`w-full flex items-center justify-between px-3 py-3 rounded-lg mb-2 transition-colors ${
							isActive('/client/support', 'Support')
								? 'bg-purple-500 text-white'
								: 'text-gray-600 hover:bg-gray-100'
						}`}
					>
						<div className="flex items-center gap-3">
							<HelpCircle size={20} />
							<span className="text-sm font-medium">Support</span>
						</div>
						<ChevronDown
							size={16}
							className={`transition-transform ${
								supportOpen ? 'rotate-180' : ''
							}`}
						/>
					</button>

					{supportOpen && (
						<div className="ml-6 space-y-2 text-gray-400">
							<button
								onClick={() => handleNavigation('/client/support/faq', 'FAQ')}
								className={`block text-sm py-2 hover:text-purple-500 w-full text-left ${
									pathname === '/client/support/faq' ? 'text-purple-500' : ''
								}`}
							>
								FAQ
							</button>
							<button
								onClick={() =>
									handleNavigation('/client/support/contact', 'Contact Us')
								}
								className={`block text-sm py-2 hover:text-purple-500 w-full text-left ${
									pathname === '/client/support/contact'
										? 'text-purple-500'
										: ''
								}`}
							>
								Contact Us
							</button>
						</div>
					)}
				</nav>

				{/* User Profile Section - Now Clickable */}
				<div className="px-4 py-4 border-t border-gray-200">
					<button
						onClick={() => handleNavigation('/client/profile', 'Profile')}
						className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
							isActive('/client/profile', 'Profile')
								? 'bg-purple-50 border border-purple-200'
								: 'bg-gray-50 hover:bg-gray-100'
						}`}
					>
						<div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
							{clientData ? (
								<span className="text-white font-semibold text-base">
									{getInitials(clientData.name)}
								</span>
							) : (
								<User size={24} className="text-white" />
							)}
						</div>
						<div className="flex-1 min-w-0 text-left">
							<p className="text-sm font-medium text-gray-900 truncate">
								{clientData?.name || 'Loading...'}
							</p>
							<p className="text-xs text-gray-500 truncate">
								{clientData?.subscription || 'Loading...'}
							</p>
						</div>
					</button>
				</div>

				{/* Logout Section */}
				<div className="p-4 border-t border-gray-200">
					<button
						onClick={handleLogout}
						className="w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-red-500 hover:bg-red-50"
					>
						<Power size={20} />
						<span className="text-sm font-medium">Logout</span>
					</button>
				</div>
			</aside>
		</>
	);
}
