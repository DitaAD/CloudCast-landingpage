// src/components/Footer.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

// Footer Component
const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <footer className="pt-5">
      <div className="container">
        <div className="row">
          {/* Products */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold">Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Weather API</a></li>
              <li><a href="#" className="text-decoration-none">Weather Forecast</a></li>
              <li><a href="#" className="text-decoration-none">Weather Maps</a></li>
              <li><a href="#" className="text-decoration-none">Weather Radar</a></li>
              <li><a href="#" className="text-decoration-none">Weather Dashboard</a></li>
              <li><a href="#" className="text-decoration-none">Weather Widget</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">News</a></li>
              <li><a href="#" className="text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-decoration-none">Help Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">About</a></li>
              <li><a href="#" className="text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold">Contact</h5>
            <p><a href="mailto:info@CloudCast.com" className="text-decoration-none">info@WeatherPortal.com</a></p>
            <h5 className="font-weight-bold">Location/HQ</h5>
            <p className="text-light">123cloud St, Weather City, FC 12345</p>
          </div>
        </div>

        {/* Sign up & Social Media */}
        <div className="row">
          <div className="col-md-6 mb-4">
            {/* Conditional render for the subscription form */}
            {!isLoggedIn ? (
              <form className="d-flex mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control rounded-pill"
                />
                <button type="submit" className="btn btn-primary ms-2 rounded-pill">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-muted">Already subscribed. Enjoy our offers!</p>
            )}
          </div>

          {/* Social Media Links */}
          <div className="col-md-6 mb-4">
            <div className="d-flex justify-content-center">
              <a href="#" className="me-3">
                <Image src="/logo.svg" alt="CloudCast Website" width={30} height={30} />
              </a>
              <a href="#" className="me-3">
                <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
              </a>
              <a href="#" className="me-3">
                <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-4 mt-5 border-top">
          <p className="small">© All Rights Reserved, 2024 CloudCast</p>
          <div className="small">
            <a href="#terms-of-use" className="me-3">Terms of Use</a>
            <a href="#privacy-policy" className="me-3">Privacy Policy</a>
            <a href="#accessibility" className="me-3">Accessibility Statement</a>
            <a href="#data-vendors" className="me-3">Data Vendors</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
