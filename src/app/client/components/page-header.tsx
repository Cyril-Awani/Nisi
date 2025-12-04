import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
	title: string;
	description: string;
	icon: LucideIcon;
	iconBgColor?: string;
	iconColor?: string;
}

export function PageHeader({
	title,
	description,
	icon: Icon,
	iconBgColor = 'bg-purple-100',
	iconColor = 'text-purple-600',
}: PageHeaderProps) {
	return (
		<div className="mb-6 md:mb-8">
			<div className="flex items-center gap-3 mb-3">
				<div
					className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}
				>
					<Icon size={24} className={iconColor} />
				</div>
				<div>
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900">
						{title}
					</h1>
					<p className="mt-1 text-sm md:text-base text-gray-600">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
