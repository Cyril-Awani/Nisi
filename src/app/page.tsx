import Hero from '@/components/Hero';
import PlansGrid from '@/components/PlansGrid';
import HelpSection from '@/components/HelpSection';
import FeaturesGrid from '@/components/Features';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<div className="min-h-screen">
			<main>
				<Hero />
				<section className="py-4 container mx-auto px-4">
					<FeaturesGrid />
					<h2 className="text-2xl font-bold text-center md:mb-12">
						Our <span className="text-purple-800">Exceptional</span> Plans
					</h2>
					<PlansGrid />
					<HelpSection />
				</section>
				<Testimonials />
			</main>
		</div>
	);
}
