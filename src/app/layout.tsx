// src/app/layout.tsx

import Script from "next/script";
import "../styles/globals.css";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Weather Portal Landing Page</title>
        <meta name="description" content="First Next.js landing page project." />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9R6B3TL903"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9R6B3TL903');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
