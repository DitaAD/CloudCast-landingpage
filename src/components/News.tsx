// src/components/News.tsx

"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Mock data for weather news
const mockWeatherNews = [
  {
    id: 1,
    title: "Hujan Lebat Diprediksi Melanda Jakarta",
    content: "BMKG memperkirakan hujan lebat akan terjadi di wilayah Jakarta dan sekitarnya selama tiga hari ke depan.",
    date: "2024-12-01",
  },
  {
    id: 2,
    title: "Gelombang Tinggi Ancam Wilayah Pantai Selatan",
    content: "Nelayan diimbau untuk tidak melaut akibat gelombang tinggi yang mencapai 4-6 meter di pantai selatan Jawa.",
    date: "2024-12-01",
  },
  {
    id: 3,
    title: "Suhu Ekstrem Terjadi di Wilayah Semarang",
    content: "Suhu mencapai 38°C di siang hari. Warga diimbau untuk menjaga hidrasi dan menghindari aktivitas luar ruangan.",
    date: "2024-12-02",
  },
  {
    id: 4,
    title: "Angin Kencang Landa Wilayah Bandung",
    content: "BMKG melaporkan angin kencang dengan kecepatan hingga 60 km/jam melanda Bandung. Warga diminta waspada terhadap pohon tumbang.",
    date: "2024-12-02",
  },
  {
    id: 5,
    title: "Curah Hujan Tinggi Sebabkan Longsor di Bogor",
    content: "Hujan deras selama dua hari terakhir memicu longsor di beberapa wilayah Bogor, mengakibatkan jalanan tertutup material.",
    date: "2024-12-03",
  },
  {
    id: 6,
    title: "Banjir Rob Rendam Kawasan Pesisir Semarang",
    content: "Banjir rob akibat pasang laut tinggi merendam kawasan pesisir Semarang, mengakibatkan akses jalan utama terganggu.",
    date: "2024-12-03",
  },
];

const News = () => {
  const [weatherNews, setWeatherNews] = useState(mockWeatherNews); // Weather news data
  const [isLoading, setIsLoading] = useState(true); // Loading status

  // Simulate API call
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulated 1-second delay
    };

    fetchData();
  }, []);

  // Conditional function to render news
  const renderNews = () => {
    if (isLoading) {
      return <p className="text-center">Loading news...</p>;
    }

    if (weatherNews.length === 0) {
      return <p className="text-center">No weather news available at the moment.</p>;
    }

    return (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {weatherNews.map((news) => (
          <div className="col" key={news.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text text-muted">{news.content}</p>
              </div>
              <div className="card-footer bg-transparent text-end">
                <small className="text-muted">Published on: {news.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="news" className="container py-5">
      <h2 className="text-center mb-4">Weather News</h2>
      {renderNews()}
    </section>
  );
};

export default News;
