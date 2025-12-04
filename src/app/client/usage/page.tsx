// app/client/usage/page.tsx
'use client';

import { useState, useEffect } from 'react';
import {
	ArrowUpCircle,
	ArrowDownCircle,
	Clock,
	Gauge,
	HardDrive,
	Activity,
	Smartphone,
	BarChart3,
} from 'lucide-react';
import {
	Area,
	AreaChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';
import { PageHeader } from '../components/page-header';

// -----------------------------------------------------------------------------
// Skeleton Loader Components
// -----------------------------------------------------------------------------

function SkeletonCard() {
	return (
		<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse">
			<div className="flex items-center justify-between mb-6">
				<div className="h-4 bg-gray-200 rounded w-24"></div>
				<div className="h-5 w-5 bg-gray-200 rounded"></div>
			</div>
			<div className="space-y-6">
				<div>
					<div className="flex items-baseline gap-1">
						<div className="h-10 bg-gray-200 rounded w-32"></div>
						<div className="h-6 bg-gray-200 rounded w-8"></div>
					</div>
					<div className="mt-2 h-3 bg-gray-200 rounded w-20"></div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{[1, 2].map((i) => (
						<div key={i} className="rounded-lg bg-gray-100 p-3">
							<div className="flex items-center gap-2">
								<div className="h-4 w-4 bg-gray-200 rounded"></div>
								<div className="h-3 bg-gray-200 rounded w-16"></div>
							</div>
							<div className="mt-2 flex items-baseline gap-1">
								<div className="h-6 bg-gray-200 rounded w-12"></div>
								<div className="h-4 bg-gray-200 rounded w-8"></div>
							</div>
						</div>
					))}
				</div>
				<div className="h-32 bg-gray-200 rounded"></div>
			</div>
		</div>
	);
}

function SkeletonSummaryCard() {
	return (
		<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 animate-pulse">
			<div className="flex items-center gap-4">
				<div className="rounded-lg bg-gray-200 p-2 h-10 w-10"></div>
				<div className="flex-1">
					<div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
					<div className="flex items-baseline gap-1">
						<div className="h-6 bg-gray-200 rounded w-12"></div>
						<div className="h-4 bg-gray-200 rounded w-8"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Chart Data
// -----------------------------------------------------------------------------

const uploadData = [
	{ time: '12h ago', value: 50 },
	{ time: '10h ago', value: 80 },
	{ time: '8h ago', value: 120 },
	{ time: '6h ago', value: 90 },
	{ time: '4h ago', value: 140 },
	{ time: '2h ago', value: 110 },
	{ time: 'Now', value: 125 },
];

const downloadData = [
	{ time: '12h ago', value: 200 },
	{ time: '10h ago', value: 450 },
	{ time: '8h ago', value: 380 },
	{ time: '6h ago', value: 520 },
	{ time: '4h ago', value: 680 },
	{ time: '2h ago', value: 600 },
	{ time: 'Now', value: 718 },
];

// -----------------------------------------------------------------------------
// UsageChart Component
// -----------------------------------------------------------------------------

interface UsageChartProps {
	type: 'upload' | 'download';
	isLoading?: boolean;
}

function UsageChart({ type, isLoading = false }: UsageChartProps) {
	const data = type === 'upload' ? uploadData : downloadData;
	const color = type === 'upload' ? '#8b5cf6' : '#3b82f6'; // Purple for upload, Blue for download

	if (isLoading) {
		return (
			<div className="h-32 w-full bg-gray-100 rounded animate-pulse"></div>
		);
	}

	return (
		<div className="h-32 w-full">
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					data={data}
					margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
				>
					<defs>
						<linearGradient id={`gradient-${type}`} x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor={color} stopOpacity={0.3} />
							<stop offset="100%" stopColor={color} stopOpacity={0} />
						</linearGradient>
					</defs>

					<XAxis
						dataKey="time"
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 10, fill: '#6b7280' }}
						interval="preserveStartEnd"
					/>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 10, fill: '#6b7280' }}
						tickFormatter={(value) => `${value}GB`}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: 'white',
							border: '1px solid #e5e7eb',
							borderRadius: '8px',
							color: '#111827',
							boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
						}}
						labelStyle={{ color: '#6b7280' }}
						formatter={(value: number) => [
							`${value} GB`,
							type === 'upload' ? 'Uploaded' : 'Downloaded',
						]}
					/>

					<Area
						type="monotone"
						dataKey="value"
						stroke={color}
						strokeWidth={2}
						fill={`url(#gradient-${type})`}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Page Stats Data
// -----------------------------------------------------------------------------

const uploadStats = {
	dataTransferred: '125.25',
	unit: 'GB',
	averageSpeed: '2.3',
	speedUnit: 'Mbps',
	duration: '232',
	durationUnit: 'min',
};

const downloadStats = {
	dataTransferred: '718.23',
	unit: 'GB',
	averageSpeed: '8.3',
	speedUnit: 'Mbps',
	duration: '556',
	durationUnit: 'min',
};

// -----------------------------------------------------------------------------
// Reusable Components
// -----------------------------------------------------------------------------

function StatItem({
	icon,
	label,
	value,
	unit,
	isLoading = false,
}: {
	icon: React.ReactNode;
	label: string;
	value: string;
	unit: string;
	isLoading?: boolean;
}) {
	if (isLoading) {
		return (
			<div className="rounded-lg bg-gray-100 p-3 animate-pulse">
				<div className="flex items-center gap-2">
					<div className="h-4 w-4 bg-gray-200 rounded"></div>
					<div className="h-3 bg-gray-200 rounded w-16"></div>
				</div>
				<div className="mt-2 flex items-baseline gap-1">
					<div className="h-6 bg-gray-200 rounded w-12"></div>
					<div className="h-4 bg-gray-200 rounded w-8"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="rounded-lg bg-gray-50 p-3 border border-gray-100">
			<div className="flex items-center gap-2 text-gray-600">
				{icon}
				<span className="text-xs font-medium">{label}</span>
			</div>

			<div className="mt-2 flex items-baseline gap-1">
				<span className="text-xl font-semibold text-gray-900">{value}</span>
				<span className="text-sm text-gray-500">{unit}</span>
			</div>
		</div>
	);
}

function SummaryCard({
	icon,
	title,
	value,
	unit,
	isLoading = false,
}: {
	icon: React.ReactNode;
	title: string;
	value: string;
	unit: string;
	isLoading?: boolean;
}) {
	if (isLoading) {
		return <SkeletonSummaryCard />;
	}

	return (
		<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
			<div className="flex items-center gap-4">
				<div className="rounded-lg bg-purple-100 p-2 text-purple-600">
					{icon}
				</div>

				<div>
					<p className="text-xs text-gray-500 font-medium">{title}</p>

					<div className="flex items-baseline gap-1">
						<span className="text-lg font-semibold text-gray-900">{value}</span>
						<span className="text-sm text-gray-500">{unit}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

// -----------------------------------------------------------------------------
// Main Page Export
// -----------------------------------------------------------------------------

export default function DataUsagePage() {
	const [isLoading, setIsLoading] = useState(true);

	// Simulate loading state
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="w-full bg-white border-b border-gray-200 pt-16 lg:pt-6 p-4 sm:p-6 lg:pl-6">
			{/* Header */}
			<PageHeader
				title="Data Usage"
				description="Monitor your network transfer statistics"
				icon={BarChart3}
				iconBgColor="bg-purple-100"
				iconColor="text-purple-600"
			/>

			{/* Main Grid - Responsive layout */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
				{/* Upload Card */}
				{isLoading ? (
					<SkeletonCard />
				) : (
					<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
						<div className="flex items-center justify-between mb-4 md:mb-6">
							<h2 className="text-base md:text-lg font-semibold text-gray-900">
								Upload Stats
							</h2>
							<ArrowUpCircle className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
						</div>

						<div className="space-y-4 md:space-y-6">
							<div>
								<div className="flex items-baseline gap-1">
									<span className="text-2xl md:text-4xl font-bold text-gray-900">
										{uploadStats.dataTransferred}
									</span>
									<span className="text-base md:text-lg text-gray-500">
										{uploadStats.unit}
									</span>
								</div>

								<p className="mt-1 text-xs md:text-sm text-gray-500">
									Total uploaded
								</p>
							</div>

							<div className="grid grid-cols-2 gap-3 md:gap-4">
								<StatItem
									icon={<Gauge className="h-4 w-4" />}
									label="Average speed"
									value={uploadStats.averageSpeed}
									unit={uploadStats.speedUnit}
									isLoading={isLoading}
								/>

								<StatItem
									icon={<Clock className="h-4 w-4" />}
									label="Upload time"
									value={uploadStats.duration}
									unit={uploadStats.durationUnit}
									isLoading={isLoading}
								/>
							</div>

							<div>
								<h3 className="text-sm font-medium text-gray-700 mb-2">
									Upload Trend
								</h3>
								<UsageChart type="upload" isLoading={isLoading} />
							</div>
						</div>
					</div>
				)}

				{/* Download Card */}
				{isLoading ? (
					<SkeletonCard />
				) : (
					<div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
						<div className="flex items-center justify-between mb-4 md:mb-6">
							<h2 className="text-base md:text-lg font-semibold text-gray-900">
								Download Stats
							</h2>
							<ArrowDownCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
						</div>

						<div className="space-y-4 md:space-y-6">
							<div>
								<div className="flex items-baseline gap-1">
									<span className="text-2xl md:text-4xl font-bold text-gray-900">
										{downloadStats.dataTransferred}
									</span>
									<span className="text-base md:text-lg text-gray-500">
										{downloadStats.unit}
									</span>
								</div>

								<p className="mt-1 text-xs md:text-sm text-gray-500">
									Total downloaded
								</p>
							</div>

							<div className="grid grid-cols-2 gap-3 md:gap-4">
								<StatItem
									icon={<Gauge className="h-4 w-4" />}
									label="Average speed"
									value={downloadStats.averageSpeed}
									unit={downloadStats.speedUnit}
									isLoading={isLoading}
								/>

								<StatItem
									icon={<Clock className="h-4 w-4" />}
									label="Download time"
									value={downloadStats.duration}
									unit={downloadStats.durationUnit}
									isLoading={isLoading}
								/>
							</div>

							<div>
								<h3 className="text-sm font-medium text-gray-700 mb-2">
									Download Trend
								</h3>
								<UsageChart type="download" isLoading={isLoading} />
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Summary Cards - Responsive grid */}
			<div className="mt-6 md:mt-8">
				<h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
					Usage Summary
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<SummaryCard
						icon={<HardDrive className="h-5 w-5" />}
						title="Total Data"
						value="843.48"
						unit="GB"
						isLoading={isLoading}
					/>

					<SummaryCard
						icon={<Activity className="h-5 w-5" />}
						title="Avg Speed"
						value="5.3"
						unit="Mbps"
						isLoading={isLoading}
					/>

					<SummaryCard
						icon={<Clock className="h-5 w-5" />}
						title="Total Time"
						value="788"
						unit="min"
						isLoading={isLoading}
					/>

					<SummaryCard
						icon={<ArrowUpCircle className="h-5 w-5" />}
						title="Upload Ratio"
						value="14.8"
						unit="%"
						isLoading={isLoading}
					/>
				</div>
			</div>

			{/* Additional Info Section */}
			{!isLoading && (
				<div className="mt-8 md:mt-10 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
					<div className="flex items-center gap-3 mb-4">
						<Smartphone size={20} className="text-purple-600" />
						<h3 className="text-lg font-semibold text-gray-900">
							Usage Insights
						</h3>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
							<p className="text-sm text-blue-800">
								📈 <span className="font-semibold">Peak Hours:</span> 6 PM - 10
								PM
							</p>
						</div>
						<div className="p-4 bg-green-50 rounded-lg border border-green-100">
							<p className="text-sm text-green-800">
								⚡ <span className="font-semibold">Best Speed:</span> 2 AM - 6
								AM
							</p>
						</div>
						<div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
							<p className="text-sm text-purple-800">
								📊 <span className="font-semibold">Monthly Trend:</span> +12% vs
								last month
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
