// src/components/Navbar.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";

// Button Component
const Button = ({ label, onClick, icon }: { label: string; onClick?: () => void; icon?: string }) => (
  <button className="btn btn-primary d-flex align-items-center" onClick={onClick}>
    {icon && <Image src={icon} alt="Icon" width={20} height={20} className="me-2" />}
    {label}
  </button>
);

// Logo Component
const Logo = () => (
  <div className="d-flex align-items-center">
    <Image src="/logo.svg" alt="Weather Logo" width={40} height={40} />
    <span className="ms-2 fs-4 fw-bold">CloudCast</span>
  </div>
);

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <Logo />
        {/* Hamburger Menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isMenuOpen ? "true" : "false"} aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          {/* Navigation Links */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link href="/forecast" className="nav-link">Forecast</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">API</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#map">Radar & Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">News & Blogs</a>
            </li>
          </ul>

          {/* Sign In / Log Out */}
          <div className="d-flex ms-3">
            {isLoggedIn ? (
              <Button label="Log Out" onClick={() => setIsLoggedIn(false)} />
            ) : (
              <Button label="Sign In" onClick={() => setIsLoggedIn(true)} icon="/profile.svg" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
