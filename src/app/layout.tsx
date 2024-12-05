// src/app/layout.tsx

import Script from "next/script";
import "../styles/globals.css";

import React from "react";

export const metadata = {
  title: "Weather Portal Landing Page",
  description: "First Next.js landing page project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9R6B3TL903"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9R6B3TL903');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
