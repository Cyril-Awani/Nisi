// contexts/ClientContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface UsageData {
	upload: string;
	download: string;
	total: string;
	remaining: string;
	cycleEnd: string;
	percentageUsed: number;
}

interface BillingData {
	cardLastFour: string;
	cardName: string;
	expDate: string;
	status: string;
}

interface NetworkData {
	macId: string;
	signalStrength: number;
	location: string;
	ipAddress: string;
	connectionType: string;
}

interface ClientData {
	userId: string; // Added userId
	name: string;
	email: string;
	id: string;
	subscription: string;
	subscriptionStart: string;
	expirationDate: string;
	invoices: string[];
	notifications: string[];
	joinDate: string;
	lastLogin: string;
	devices: number;
	dataUsage: string;
	speed: string;
	price: string;
	billing: BillingData;
	network: NetworkData;
	usage: UsageData;
}

interface ClientContextType {
	isLoggedIn: boolean;
	clientData: ClientData | null;
	isLoading: boolean;
	userId: string | null; // Added userId to context
	login: (data: ClientData) => void;
	logout: () => void;
	setUserId: (userId: string) => void; // Optional: if you want to set userId separately
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: React.ReactNode }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [clientData, setClientData] = useState<ClientData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [userId, setUserId] = useState<string | null>(null); // Added userId state

	useEffect(() => {
		// Check for stored login state on mount
		const stored = localStorage.getItem('clientAuth');
		if (stored) {
			try {
				const {
					isLoggedIn: storedLogin,
					clientData: storedData,
					userId: storedUserId,
				} = JSON.parse(stored);
				setIsLoggedIn(storedLogin);
				setClientData(storedData);
				setUserId(storedUserId);
			} catch (error) {
				console.error('Error parsing stored auth data:', error);
				localStorage.removeItem('clientAuth');
			}
		}
		setIsLoading(false);
	}, []);

	const login = (data: ClientData) => {
		setIsLoggedIn(true);
		setClientData(data);
		setUserId(data.userId); // Set userId from data
		localStorage.setItem(
			'clientAuth',
			JSON.stringify({
				isLoggedIn: true,
				clientData: data,
				userId: data.userId,
			})
		);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setClientData(null);
		setUserId(null);
		localStorage.removeItem('clientAuth');
	};

	// Optional: Separate setter for userId
	const handleSetUserId = (id: string) => {
		setUserId(id);
		// Update localStorage if needed
		const stored = localStorage.getItem('clientAuth');
		if (stored) {
			const storedData = JSON.parse(stored);
			localStorage.setItem(
				'clientAuth',
				JSON.stringify({
					...storedData,
					userId: id,
				})
			);
		}
	};

	return (
		<ClientContext.Provider
			value={{
				isLoggedIn,
				clientData,
				isLoading,
				userId, // Added userId
				login,
				logout,
				setUserId: handleSetUserId, // Optional
			}}
		>
			{children}
		</ClientContext.Provider>
	);
}

export function useClient() {
	const context = useContext(ClientContext);
	if (context === undefined) {
		throw new Error('useClient must be used within a ClientProvider');
	}
	return context;
}
