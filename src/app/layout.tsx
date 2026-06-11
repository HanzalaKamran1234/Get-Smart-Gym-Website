import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Get Smart Gym | Building Healthy Nation - Premium Fitness Club Karachi",
  description: "Chain of Get Smart Gym is determined to its motto of 'Building Healthy Nation' and strives to make gyms with excellent machines, premium ambiance, and professional trainers more affordable, accessible, and dependable for families in Karachi.",
  keywords: [
    "Best Gym in Karachi",
    "Fitness Center Karachi",
    "Personal Training Karachi",
    "Family Gym Karachi",
    "Gym Membership Karachi",
    "Chain of Get Smart Gym",
    "Karachi Fitness Hub",
    "Affordable Luxury Gym"
  ],
  authors: [{ name: "Get Smart Gym" }],
  metadataBase: new URL("https://get-smart-gym-website.vercel.app"),
  openGraph: {
    title: "Get Smart Gym | Building Healthy Nation - Premium Fitness Club",
    description: "Chain of Get Smart Gym offers premium ambiance, advanced workout equipment, and certified professional coaching in Karachi.",
    url: "https://get-smart-gym-website.vercel.app",
    siteName: "Get Smart Gym",
    images: [
      {
        url: "/assets/media__1781157310632.jpg",
        width: 1200,
        height: 630,
        alt: "Chain of Get Smart Gym Entrance Karachi"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Smart Gym | Building Healthy Nation",
    description: "Chain of Get Smart Gym offers premium ambiance, advanced workout equipment, and certified professional coaching in Karachi.",
    images: ["/assets/media__1781157310632.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup for organization and local gym location
  const gymSchema = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "name": "Get Smart Gym",
    "image": "https://get-smart-gym-website.vercel.app/assets/media__1781157310632.jpg",
    "url": "https://get-smart-gym-website.vercel.app",
    "telephone": "+92-300-1234567",
    "slogan": "Building Healthy Nation",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Gulshan / DHA / Clifton Branches",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8607,
      "longitude": 67.0011
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/getsmartgym",
      "https://www.instagram.com/getsmartgym"
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
        />
        {/* Favicon placeholder link */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-background font-sans">
        {children}
      </body>
    </html>
  );
}
