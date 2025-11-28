// components/ClientLoginModal.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { sampleClientData } from '@/data/clientData';
import { useClient } from '@/contexts/ClientContext';

interface ClientLoginModalProps {
	onAction?: () => void;
	onLoginOpen?: () => void;
}

export default function ClientLoginModal({
	onAction,
	onLoginOpen,
}: ClientLoginModalProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const modalRef = useRef<HTMLDivElement>(null);
	const router = useRouter();
	const { login } = useClient();

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			if (
				email === sampleClientData.email &&
				password === sampleClientData.password
			) {
				const dummyClientData = sampleClientData.clientInfo;
				login(dummyClientData);
				setIsOpen(false);
				onAction?.();
				// Redirect to dashboard after successful login
				router.push('/client');
			} else {
				setError('Invalid email or password. Please try again.');
			}
		} catch (err) {
			setError('An unexpected error occurred. Please try again later.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleLinkClick = (path: string) => {
		setIsOpen(false);
		onAction?.();
		router.push(path);
	};

	return (
		<>
			<button
				onClick={() => {
					setIsOpen(true);
					onLoginOpen?.();
				}}
				className="bg-white text-purple-800 px-4 py-2 rounded hover:bg-purple-100 transition"
			>
				Client Login
			</button>

			{isOpen && (
				<div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
					<motion.div
						ref={modalRef}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.2 }}
						className="bg-white/20 backdrop-blur-md rounded-lg shadow-xl w-full max-w-md"
					>
						<div className="border-b p-4 flex justify-between items-center">
							<h3 className="text-xl font-bold text-white">Client Login</h3>
							<button
								onClick={() => setIsOpen(false)}
								className="text-gray-500 hover:text-gray-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						<div className="p-6">
							{error && (
								<div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
									{error}
								</div>
							)}

							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-white mb-1"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>

								<div className="mb-4">
									<label
										htmlFor="password"
										className="block text-sm font-medium text-white mb-1"
									>
										Password
									</label>
									<input
										type="password"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>

								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center">
										<input
											type="checkbox"
											id="remember"
											checked={rememberMe}
											onChange={(e) => setRememberMe(e.target.checked)}
											className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
										/>
										<label
											htmlFor="remember"
											className="ml-2 block text-sm text-white"
										>
											Remember me
										</label>
									</div>

									<button
										type="button"
										onClick={() => handleLinkClick('/forgot-password')}
										className="text-sm text-white hover:text-gray-300"
									>
										Forgot password?
									</button>
								</div>

								<button
									type="submit"
									disabled={isLoading}
									className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
										isLoading ? 'opacity-70 cursor-not-allowed' : ''
									}`}
								>
									{isLoading ? (
										<span className="flex items-center justify-center">
											<svg
												className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Logging in...
										</span>
									) : (
										'Login'
									)}
								</button>
							</form>
						</div>

						<div className="border-t p-4 bg-gray-50 rounded-b-lg text-center">
							<p className="text-sm text-gray-600">
								Don&apos;t have an account?{' '}
								<button
									onClick={() => handleLinkClick('/signup')}
									className="text-blue-600 hover:text-blue-500 font-medium"
								>
									Let&apos;s get you set up...
								</button>
							</p>
						</div>
					</motion.div>
				</div>
			)}
		</>
	);
}
