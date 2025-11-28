'use client';

import { ArrowDown, ArrowUp } from 'lucide-react';

export default function StatsCards() {
	return (
		<div className="rounded-xl bg-white border border-gray-200 p-4 sm:p-5">
			{/* Mobile Layout - Side by side */}
			<div className="lg:hidden grid grid-cols-2 gap-3">
				{/* Upload Stats - Mobile */}
				<div className="text-left p-3 rounded-lg transition-all">
					<div className="flex items-center gap-2 mb-2">
						<ArrowUp size={20} className="text-red-400" />
						<span className="text-xs text-gray-600">Upload</span>
					</div>

					<div className="flex items-baseline gap-1">
						<span className="text-xl font-bold text-gray-900">125.25</span>
						<span className="text-sm text-gray-500">GB</span>
					</div>

					<div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
						<p>2.3 Mbps</p>
						<p>232 min</p>
					</div>
				</div>

				{/* Download Stats - Mobile */}
				<div className="text-left p-3 rounded-lg transition-all">
					<div className="flex items-center gap-2 mb-2">
						<ArrowDown size={20} className="text-green-400" />
						<span className="text-xs text-gray-600">Download</span>
					</div>

					<div className="flex items-baseline gap-1">
						<span className="text-xl font-bold text-gray-900">718.23</span>
						<span className="text-sm text-gray-500">GB</span>
					</div>

					<div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
						<p>8.3 Mbps</p>
						<p>556 min</p>
					</div>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
				{/* Upload Stats - Desktop */}
				<div className="text-left p-4 rounded-lg transition-all">
					<div className="flex items-center gap-2 mb-3">
						<ArrowUp size={20} className="text-red-400" />
						<span className="text-sm text-gray-600">Upload Stats</span>
					</div>

					<div className="flex items-baseline gap-2">
						<span className="text-3xl sm:text-4xl font-bold text-gray-900">
							125.25
						</span>
						<span className="text-lg sm:text-xl text-gray-500">GB</span>
					</div>

					<div className="flex items-center gap-4 mt-3 text-xs sm:text-sm text-gray-400">
						<p>2.3 Mbps Average speed</p>
						<p>232 min upload</p>
					</div>
				</div>

				{/* Download Stats - Desktop */}
				<div className="text-left p-4 rounded-lg transition-all sm:border-l sm:border-gray-200 sm:pl-6">
					<div className="flex items-center gap-2 mb-3">
						<ArrowDown size={20} className="text-green-400" />
						<span className="text-sm text-gray-600">Download Stats</span>
					</div>

					<div className="flex items-baseline gap-2">
						<span className="text-3xl sm:text-4xl font-bold text-gray-900">
							718.23
						</span>
						<span className="text-lg sm:text-xl text-gray-500">GB</span>
					</div>

					<div className="flex items-center gap-4 mt-3 text-xs sm:text-sm text-gray-400">
						<p>8.3 Mbps Average speed</p>
						<p>556 min download</p>
					</div>
				</div>
			</div>
		</div>
	);
}
