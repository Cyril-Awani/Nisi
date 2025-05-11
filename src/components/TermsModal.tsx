'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TermsModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const modalRef = useRef<HTMLDivElement>(null);

	// Close modal when clicking outside or pressing Escape
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		}

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onClose();
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
			<motion.div
				ref={modalRef}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				transition={{ duration: 0.2 }}
				className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
			>
				{/* Modal Header */}
				<div className="border-b p-4 flex justify-between items-center sticky top-0 bg-white z-10">
					<h3 className="text-xl font-bold text-gray-800">
						Terms and Conditions
					</h3>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
						aria-label="Close terms modal"
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

				{/* Modal Body */}
				<div className="p-6 overflow-y-auto flex-1">
					<div className="prose max-w-none">
						<h4 className="text-lg font-semibold mb-4">
							Last Updated: {new Date().toLocaleDateString()}
						</h4>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								1. Acceptance of Terms
							</h5>
							<p className="text-gray-600 text-sm">
								By accessing or using our services, you agree to be bound by
								these Terms and Conditions. If you do not agree with any part of
								these terms, you must not use our services.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								2. Service Description
							</h5>
							<p className="text-gray-600 text-sm">
								Our company provides internet services including but not limited
								to broadband connectivity, Wi-Fi solutions, and related
								technical support. The specific services you receive will depend
								on your selected plan and location.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								3. User Responsibilities
							</h5>
							<ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
								<li>
									You must provide accurate information during registration
								</li>
								<li>
									You are responsible for maintaining the confidentiality of
									your account credentials
								</li>
								<li>
									You agree not to use the service for any illegal activities
								</li>
								<li>
									You must comply with all applicable laws and regulations
								</li>
							</ul>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								4. Payment Terms
							</h5>
							<p className="text-gray-600 text-sm">
								All fees for services are due in advance according to your
								billing cycle. Late payments may result in service interruption.
								We reserve the right to change pricing with 30 days notice.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								5. Privacy Policy
							</h5>
							<p className="text-gray-600 text-sm">
								Your privacy is important to us. Our Privacy Policy explains how
								we collect, use, and protect your personal information and is
								incorporated into these Terms by reference.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								6. Service Limitations
							</h5>
							<p className="text-gray-600 text-sm">
								While we strive to provide uninterrupted service, we cannot
								guarantee that the service will be available 100% of the time.
								We may need to perform maintenance that could temporarily
								interrupt service.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">7. Termination</h5>
							<p className="text-gray-600 text-sm">
								Either party may terminate service with proper notice. Early
								termination may result in fees as specified in your service
								agreement.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								8. Limitation of Liability
							</h5>
							<p className="text-gray-600 text-sm">
								Our liability for any claim related to the services shall not
								exceed the amount you paid for services during the 12 months
								preceding the claim.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								9. Changes to Terms
							</h5>
							<p className="text-gray-600 text-sm">
								We may modify these Terms at any time. We will notify you of
								significant changes, and continued use of our services
								constitutes acceptance of the modified Terms.
							</p>
						</section>

						<section className="mb-6">
							<h5 className="font-medium text-gray-900 mb-2">
								10. Governing Law
							</h5>
							<p className="text-gray-600 text-sm">
								These Terms shall be governed by and construed in accordance
								with the laws of the jurisdiction where our company is
								registered.
							</p>
						</section>
					</div>
				</div>

				{/* Modal Footer */}
				<div className="border-t p-4 bg-gray-50 rounded-b-lg flex justify-end">
					<button
						onClick={onClose}
						className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
					>
						I Understand
					</button>
				</div>
			</motion.div>
		</div>
	);
}
