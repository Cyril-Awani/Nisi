// contexts/ClientContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ClientData {
	name: string;
	email: string;
	id: string;
	subscription: string;
	expirationDate: string;
	invoices: string[];
	notifications: string[];
	usage: string;
}

interface ClientContextType {
	isLoggedIn: boolean;
	clientData: ClientData | null;
	isLoading: boolean;
	login: (data: ClientData) => void;
	logout: () => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children }: { children: React.ReactNode }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [clientData, setClientData] = useState<ClientData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check for stored login state on mount
		const stored = localStorage.getItem('clientAuth');
		if (stored) {
			try {
				const { isLoggedIn: storedLogin, clientData: storedData } =
					JSON.parse(stored);
				setIsLoggedIn(storedLogin);
				setClientData(storedData);
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
		localStorage.setItem(
			'clientAuth',
			JSON.stringify({
				isLoggedIn: true,
				clientData: data,
			})
		);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setClientData(null);
		localStorage.removeItem('clientAuth');
	};

	return (
		<ClientContext.Provider
			value={{
				isLoggedIn,
				clientData,
				isLoading,
				login,
				logout,
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
