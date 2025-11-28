'use client';

import { Users, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useClient } from '@/contexts/ClientContext';

export default function ReferralsCard() {
	const [copied, setCopied] = useState(false);
	const { clientData } = useClient();

	// Sample referrals data - in a real app, this would come from your backend
	const referralsData = {
		referralLink: `https://www.nisitechnologies.com/signup/${
			clientData?.id || 'CLIENT-001'
		}`,
		completedReferrals: 1,
		requiredReferrals: 2,
		reward: '1 month free',
		status: `${1}/${2} referrals completed`, // This would be dynamic
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(referralsData.referralLink);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="rounded-xl bg-white border border-gray-200 p-4 sm:p-5">
			<h3 className="font-semibold text-gray-900 mb-2">Referrals</h3>

			<div className="flex flex-row items-center gap-3 mb-4">
				<div className="flex items-center gap-3 flex-1">
					<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
						<Users size={20} className="text-purple-500" />
					</div>
					<div>
						<p className="font-medium text-gray-900">
							Refer {referralsData.requiredReferrals} friends
						</p>
						<p className="text-sm text-gray-400">Get {referralsData.reward}!</p>
					</div>
				</div>
				<div className="text-left sm:text-right text-gray-400">
					<Users size={16} className="inline mr-1" />
					<span className="text-sm">
						{referralsData.completedReferrals}/{referralsData.requiredReferrals}{' '}
						referrals completed
					</span>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 rounded-lg bg-gray-50">
				<input
					type="text"
					value={referralsData.referralLink}
					readOnly
					className="flex-1 bg-transparent text-sm text-gray-600 outline-none truncate"
				/>
				<button
					onClick={handleCopy}
					className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
						copied
							? 'bg-emerald-500 text-white'
							: 'bg-gray-200 text-gray-600 hover:bg-emerald-500 hover:text-white'
					}`}
				>
					{copied ? (
						<>
							<Check size={14} />
							Copied!
						</>
					) : (
						<>
							<Copy size={14} />
							Copy
						</>
					)}
				</button>
			</div>
		</div>
	);
}
