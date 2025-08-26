import React from "react";
import "./globals.css";

export const metadata = {
  title: "Raghul",
  description:
    "Modern portfolio showcasing innovative web development projects and expertise in React, Next.js, and front-end technologies.",
  keywords:
    "Front end Developer, React, Next.js, Web Development, Portfolio, JavaScript, TypeScript",
  authors: [{ name: "Raghul Rajalingam" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6b35",
  openGraph: {
    title: "Raghul Rajalingam - Front end Developer",
    description:
      "Modern portfolio showcasing innovative web development projects and expertise in React, Next.js, and full-stack technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghul Rajalingam - Front end Developer",
    description:
      "Modern portfolio showcasing innovative web development projects and expertise in React, Next.js, and full-stack technologies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fox.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
