'use client';

import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	Circle,
	useMap,
} from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';

const defaultIcon = new Icon({
	iconUrl: '/markers/marker-icon.png',
	shadowUrl: '/markers/marker-shadow.png',
	iconSize: [25, 28],
	iconAnchor: [8, 28],
	popupAnchor: [1, -20],
	shadowSize: [41, 41],
});

const coverageAreas: {
	name: string;
	position: LatLngExpression;
	radius: number;
}[] = [
	{ name: 'Okpaka', position: [5.519806, 5.821846], radius: 3500 },
	{ name: 'PTI', position: [5.571717, 5.798465], radius: 3500 },
	{ name: 'Okumagba', position: [5.529359, 5.746971], radius: 3500 },
];

const INITIAL_CENTER: LatLngExpression = [5.54, 5.75];
const INITIAL_ZOOM = 11;

function LocationMarker() {
	const [currentLocation, setCurrentLocation] =
		useState<LatLngExpression | null>(null);
	const map = useMap();

	const findUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					const newLocation: LatLngExpression = [latitude, longitude];
					setCurrentLocation(newLocation);
					map.flyTo(newLocation, 14);
				},
				(error) => {
					console.error("Error getting user's location:", error);
					alert(
						'Could not retrieve your location. Please ensure location services are enabled and granted permission.'
					);
				}
			);
		} else {
			alert('Geolocation is not supported by your browser.');
		}
	};

	const resetMap = () => {
		map.setView(INITIAL_CENTER, INITIAL_ZOOM);
	};

	return (
		<>
			{currentLocation && (
				<Marker position={currentLocation} icon={defaultIcon}>
					<Popup>You are here</Popup>
				</Marker>
			)}
			<button
				onClick={findUserLocation}
				style={{
					position: 'absolute',
					bottom: 20,
					right: 20,
					zIndex: 1000,
					padding: '10px 15px',
					backgroundColor: '#9810fa',
					color: 'white',
					border: 'none',
					borderRadius: '5px',
					cursor: 'pointer',
				}}
			>
				Current Location
			</button>
			<button
				onClick={resetMap}
				style={{
					position: 'absolute',
					bottom: 20,
					right: 180,
					zIndex: 1000,
					padding: '10px 15px',
					backgroundColor: '#6c757d',
					color: 'white',
					border: 'none',
					borderRadius: '5px',
					cursor: 'pointer',
				}}
			>
				Reset View
			</button>
		</>
	);
}

export default function LeafletMap() {
	return (
		<MapContainer
			key="map-container"
			center={INITIAL_CENTER}
			zoom={INITIAL_ZOOM}
			scrollWheelZoom={true}
			style={{ height: '100%', width: '100%' }}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

			{coverageAreas.map((area, idx) => (
				<Marker key={idx} position={area.position} icon={defaultIcon}>
					<Popup>{area.name} — Coverage Available</Popup>
				</Marker>
			))}

			{coverageAreas.map((area, idx) => (
				<Circle
					key={'circle-' + idx}
					center={area.position}
					radius={area.radius}
					pathOptions={{
						color: 'purple',
						fillColor: '#c084fc',
						fillOpacity: 0.3,
					}}
				/>
			))}

			<LocationMarker />
		</MapContainer>
	);
}
