import Image from 'next/image';
import Link from 'next/link';
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaTiktok,
	FaWhatsapp,
	FaEnvelope,
} from 'react-icons/fa';

export default function Hero() {
	return (
		<section className="relative w-full h-[70vh] flex items-center overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<Image
					src="/images/hero.jpg"
					alt="Hero Background"
					fill
					className="object-cover object-right"
					priority
				/>
			</div>

			<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

			<div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4 z-20">
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition"
				>
					<FaFacebookF size={24} color="#1877F2" />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition"
				>
					<FaInstagram size={24} color="#E4405F" />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition"
				>
					<FaTwitter size={24} color="#1DA1F2" />
				</a>
				<a
					href="https://tiktok.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition"
				>
					<FaTiktok size={24} color="#000000" />
				</a>
				<a
					href="https://wa.me/1234567890"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition"
				>
					<FaWhatsapp size={24} color="#25D366" />
				</a>
				<a href="mailto:info@nisi.com" className="hover:opacity-80 transition">
					<FaEnvelope size={24} color="#D44638" />
				</a>
			</div>

			<div className="container mx-auto px-10 md:px-20 max-w-6xl z-10 pl-8 md:pl-20 lg:pl-6">
				<h1 className="text-purple-900 text-4xl md:text-6xl font-bold leading-tight">
					Lightning Fast Internet <br /> for Your Home
				</h1>

				<p className="text-purple-900 italic text-lg md:text-xl mt-4 mb-8 max-w-xl">
					NISI delivers reliable, high-speed internet to keep us connected with
					what matters most.
				</p>

				<Link
					href="/coverage"
					className="inline-block border-2 border-purple-900 text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition"
				>
					Check Coverage Availability
				</Link>
			</div>
		</section>
	);
}
