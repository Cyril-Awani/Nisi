// data/clientData.ts
export const sampleClientData = {
	email: 'client@example.com',
	password: '123',
	clientInfo: {
		name: 'William Dunchez',
		email: 'william.dunchez@example.com',
		id: 'CLIENT-001',
		subscription: 'Nisi Gold',
		subscriptionStart: '2025-01-01',
		expirationDate: '2025-12-31',
		invoices: ['INV-001', 'INV-002', 'INV-003'],
		notifications: [
			'Your Nisi Gold plan renews in 30 days',
			'Upgrade to Nisi Platinum for 30mbps speed',
		],
		joinDate: '2023-01-15',
		lastLogin: '2024-01-20',
		devices: 3,
		dataUsage: '245GB / 300GB',
		speed: '20mbps',
		price: '₦32,197.00/month',
		// Billing information
		billing: {
			cardLastFour: '2876',
			cardName: 'William Dunchez',
			expDate: '02/27',
			status: 'active',
		},
		// Network information
		// data/clientData.ts - Network section remains the same
		network: {
			macId: '00:1B:44:11:3A:B7',
			signalStrength: -45,
			location: 'Lagos, Nigeria',
			// status is now dynamically calculated
			ipAddress: '192.168.1.100',
			connectionType: 'Wireless',
		},
	},
};
