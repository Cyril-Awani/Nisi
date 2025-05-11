'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClientLoginModal from './ClientLoginModal';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const menuVariants = {
		open: {
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
			},
		},
		closed: {
			x: '-100%',
			transition: {
				type: 'spring',
				stiffness: 300,
				damping: 30,
				delay: 0.1,
			},
		},
	};

	const linkVariants = {
		open: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3 },
		},
		closed: {
			opacity: 0,
			y: 20,
		},
	};

	const NavLink = ({ href, children }: { href: string; children: string }) => (
		<motion.div className="relative" whileHover="hover" initial="initial">
			<Link
				href={href}
				className="text-white hover:text-purple-200 px-1 py-2 block"
			>
				{children}
			</Link>
			<motion.div
				className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
				variants={{
					hover: { scaleX: 1 },
					initial: { scaleX: 0 },
				}}
				transition={{ duration: 0.3, ease: 'easeOut' }}
				style={{ originX: 0 }}
			/>
		</motion.div>
	);

	return (
		<nav className="bg-purple-800 text-white sticky top-0 z-50 shadow-md">
			<div className="container mx-auto px-4">
				{/* Top row - always visible */}
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center space-x-2">
						<Link href="/" className="flex items-center z-50">
							<Image
								src="/images/nisi-wht.svg"
								alt="NISI Logo"
								width={80}
								height={40}
								className="w-16 h-auto md:w-20"
							/>
							<h1 className="text-xl md:text-3xl mt-2 md:mt-2 font-sans">
								TECHNOLOGIES
							</h1>
						</Link>
					</div>

					{/* Desktop navigation - visible on md screens and up */}
					<div className="hidden md:flex space-x-6 items-center">
						<NavLink href="/plans">Plans</NavLink>
						<NavLink href="/coverage">Coverage</NavLink>
						<NavLink href="/about">About Us</NavLink>
						<NavLink href="/support">Support</NavLink>

						<div className="h-6 w-px bg-white mx-2"></div>
						<ClientLoginModal onAction={() => setIsMenuOpen(false)} />
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-white focus:outline-none z-50"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile menu - full screen with animation */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial="closed"
							animate="open"
							exit="closed"
							variants={menuVariants}
							className="fixed inset-0 bg-purple-800 pt-24 px-6 md:hidden z-40"
						>
							<motion.div
								className="flex flex-col h-full"
								variants={{
									open: {
										transition: { staggerChildren: 0.1, delayChildren: 0.2 },
									},
									closed: {
										transition: { staggerChildren: 0.05, staggerDirection: -1 },
									},
								}}
							>
								{[
									{ href: '/plans', label: 'Plans' },
									{ href: '/coverage', label: 'Coverage' },
									{ href: '/about', label: 'About Us' },
									{ href: '/support', label: 'Support' },
								].map((link) => (
									<motion.div key={link.href} variants={linkVariants}>
										<Link
											href={link.href}
											className="block text-2xl py-4 hover:text-purple-200  border-purple-700"
											onClick={toggleMenu}
										>
											{link.label}
										</Link>
									</motion.div>
								))}

								<motion.div variants={linkVariants}>
									<hr className="border-purple-600 my-4" />
								</motion.div>

								<motion.div variants={linkVariants}>
									<ClientLoginModal onAction={() => setIsMenuOpen(false)} />
								</motion.div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
