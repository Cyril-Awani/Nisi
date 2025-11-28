// app/client/page.tsx
'use client';
import UserProfile from './components/user-profile';
import StatsCards from './components/stats-card';
import PlanCard from './components/plan-card';
import BillingCard from './components/billing-card';
import ReferralsCard from './components/referrals-card';
export default function ClientDashboard() {
	return (
		<div className="flex-1 flex flex-col w-full lg:w-auto">
			<UserProfile />
			<div className="space-y-6 p-2">
				{/* Stats Cards */}
				<StatsCards />

				{/* Grid Layout for other cards */}
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
					<PlanCard />
					<BillingCard />
				</div>

				{/* Referrals Card - Full width */}
				<ReferralsCard />
			</div>
		</div>
	);
}
