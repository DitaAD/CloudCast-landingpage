"use client";

import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getWeatherData } from "../../utils/api";

const RadarMapContent = () => {
  const [location, setLocation] = useState("Jakarta");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<[number, number]>([6.1751, 106.8650]); // Default ke Jakarta
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null); // Gunakan ref untuk menyimpan instance map agar tidak dihapus.

  // Fetch coordinates dari API
  const fetchCoordinates = async () => {
    setLoading(true);
    try {
      const data = await getWeatherData(location);
      console.log("Fetched data:", data); // Debug respons API
      setCoordinates([data.coord.lat, data.coord.lon]);
    } catch (error) {
      alert("Failed to fetch location data. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Inisialisasi atau update map
  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView(coordinates, 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(mapInstance.current);

      L.marker(coordinates)
        .addTo(mapInstance.current)
        .bindPopup(`Radar Location - ${location}`)
        .openPopup();
    } else if (mapInstance.current) {
      mapInstance.current.setView(coordinates, 10);
      L.marker(coordinates)
        .addTo(mapInstance.current)
        .bindPopup(`Radar Location - ${location}`)
        .openPopup();
    }
  }, [coordinates]);

  return (
    <div className="radar-map-container">
      {/* Pisahkan Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="form-control w-50 rounded-pill"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="btn btn-primary ms-2 px-4 rounded-pill"
          onClick={fetchCoordinates}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {/* Map tetap di bawah Search Bar */}
      <div ref={mapRef} style={{ height: "100%" }} />
    </div>
  );
};

export default RadarMapContent;
