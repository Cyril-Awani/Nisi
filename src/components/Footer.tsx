import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-purple-900 text-white pt-12 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
					{/* Logo and Copyright */}
					<div className="flex flex-col items-center md:items-start">
						<div className="mb-2">
							<Image
								src="/images/nisi-wht.svg"
								alt="NISI Logo"
								width={120}
								height={70}
							/>
						</div>
						<p className="italic text-sm text-gray-100 mb-4">
							Connecting you to the world...
						</p>

						{/* Social Media Icons */}
						<div className="flex space-x-4 mt-2">
							<Link
								href="https://facebook.com/yourpage"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-100 hover:text-fuchsia-400 transition"
								aria-label="Facebook"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
								</svg>
							</Link>

							<Link
								href="https://twitter.com/yourpage"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-fuchsia-400 transition"
								aria-label="Twitter"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</Link>

							<Link
								href="https://instagram.com/yourpage"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-fuchsia-400 transition"
								aria-label="Instagram"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
								</svg>
							</Link>

							<Link
								href="https://linkedin.com/company/yourpage"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-fuchsia-400 transition"
								aria-label="LinkedIn"
							>
								<svg
									className="w-6 h-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-4 border-b border-fuchsia-600 pb-2">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="hover:text-fuchsia-400 transition">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:text-fuchsia-400 transition"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/plans"
									className="hover:text-fuchsia-400 transition"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="hover:text-fuchsia-400 transition"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/support"
									className="hover:text-fuchsia-400 transition"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Client Area */}
					<div>
						<h3 className="text-xl font-bold mb-4 border-b border-fuchsia-600 pb-2">
							Client Area
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/login"
									className="hover:text-fuchsia-400 transition"
								>
									Client Login
								</Link>
							</li>
							<li>
								<Link
									href="/affiliate"
									className="hover:text-fuchsia-400 transition"
								>
									Become An Affiliate +
								</Link>
							</li>
							<li>
								<Link
									href="/affiliate/login"
									className="hover:text-fuchsia-400 transition"
								>
									Affiliate Login
								</Link>
							</li>
							<li>
								<Link
									href="/affiliate/account"
									className="hover:text-fuchsia-400 transition"
								>
									Affiliate Account
								</Link>
							</li>
							<li>
								<Link
									href="/admin"
									className="hover:text-fuchsia-400 transition"
								>
									Admin
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-xl font-bold mb-4 border-b border-fuchsia-600 pb-2">
							Contact Us
						</h3>
						<div className="space-y-3">
							<div className="flex items-start">
								<svg
									className="w-5 h-5 mt-1 mr-2 text-fuchsia-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
								<span>info@nisitechnologies.com</span>
							</div>
							<div className="flex items-start">
								<svg
									className="w-5 h-5 mt-1 mr-2 text-fuchsia-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									></path>
								</svg>
								<span>(+234) 7078583761</span>
							</div>
							<div className="flex items-start">
								<svg
									className="w-5 h-5 mt-1 mr-2 text-fuchsia-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
								<span>
									Nisi Technologies Limited
									<br />
									Okamita Layout, Otokutu Junction
									<br />
									Delta State
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="border-t border-gray-800 pt-6 text-center">
					<p className="text-gray-400">
						Copyright © 2025 NISI TECHNOLOGIES. All Rights Reserved.
					</p>
					<p className="text-gray-500 text-sm mt-1">
						Powered by NISI TECHNOLOGIES
					</p>
				</div>
			</div>
		</footer>
	);
}
