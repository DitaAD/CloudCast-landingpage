// src/components/radar-map/RadarMap.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { getWeatherData } from "../utils/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const RadarMap = () => {
  const [location, setLocation] = useState("Jakarta");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState<[number, number]>([6.1751, 106.8650]); // Default to Jakarta
  const mapRef = useRef<HTMLDivElement | null>(null);

  const fetchCoordinates = async () => {
    setLoading(true);
    try {
      const data = await getWeatherData(location);
      console.log("Fetched data:", data); // Log the fetched data to check if coordinates are correct
      setCoordinates([data.coord.lat, data.coord.lon]);
    } catch (error) {
      console.error("Error fetching location data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Coordinates in useEffect:", coordinates); // Log coordinates to check their value

    if (mapRef.current) {
      const map = L.map(mapRef.current).setView(coordinates, 10);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coordinates).addTo(map).bindPopup(`Radar Location - ${location}`);

      return () => {
        map.remove();
      };
    }
  }, [coordinates]);

  return (
    <div className="radar-map-container">
      {/* Search Bar */}
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

      {/* Full-Screen Map */}
      <div ref={mapRef} style={{ height: "100%" }} />
    </div>
  );
};

export default RadarMap;
