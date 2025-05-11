import Link from 'next/link';
export default function Hero() {
	return (
		<section className="bg-purple-900 text-white py-20">
			<div className="container mx-auto text-center">
				<h1 className="text:lg text-4xl md:text-6xl font-bold mb-6">
					Lightning Fast Internet for Your Home
				</h1>
				<p className="italic text-lg md:text-xl mb-8 max-w-2xl mx-auto">
					NISI delivers reliable, high-speed internet to keep you connected with
					what matters most.
				</p>
				<div className="space-x-4">
					<Link
						href="/plans"
						className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100"
					>
						View Plans
					</Link>
					<Link
						href="/coverage"
						className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800"
					>
						Check Coverage <span className="hidden md:flex">Availability</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
