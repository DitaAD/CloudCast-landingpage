// src/components/Hero.tsx

"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getWeatherData } from "../utils/api";

// Button Component
const Button = ({
  label,
  onClick,
  className = "btn-primary",
  icon,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: string;
}) => {
  return (
    <button
      className={`btn ${className} d-flex align-items-center px-5 py-3 rounded-pill fw-bold`}
      onClick={onClick}
    >
      {icon && <i className={`${icon} me-3`}></i>}
      {label}
    </button>
  );
};

const Hero = () => {
  const [location, setLocation] = useState(""); // For user input
  const [weather, setWeather] = useState<any>(null); // Weather data
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const data = await getWeatherData(location);
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center vh-100 text-center position-relative">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-index-1"
          style={{ objectFit: "cover" }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="container position-relative z-index-10">
        <h1 className="text-white fw-bold display-3" data-aos="fade-up" data-aos-duration="1000">
          Welcome to CloudCast
        </h1>
        <p className="mt-3 text-white fs-5" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          Real-time weather updates, forecasts, and radar maps.
        </p>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="400">
          <input
            type="text"
            className="form-control w-50 rounded-pill"
            placeholder="Enter location...(jakarta)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-primary ms-2 px-4 rounded-pill" onClick={fetchWeather}>
            Search
          </button>
        </div>

        {/* Weather Info */}
        {loading && <p className="text-white mt-3">Loading weather data...</p>}
        {weather && (
          <div className="mt-4 text-white" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="600">
            <h3>Weather in {weather.name}</h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
