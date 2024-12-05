// src/app/page.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import RadarMap from "../components/RadarMap";
import News from "../components/News";

import React from "react";

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mt-5">
        <h1>Radar Map</h1>
        <p>Stay updated with the latest weather forecasts.</p>
        <RadarMap />
        <News />
      </main>
      <Footer />
    </>
  );
};

export default Home;
