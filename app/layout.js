import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis Booking | Alamin (CodePapa360)",
    default: "The Wild Oasis Booking | Alamin (CodePapa360)",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="color-scheme" content="dark" />
      <meta name="theme-color" content="#141c24" />
      <link
        rel="canonical"
        href="https://the-wild-oasis-booking-alamin.vercel.app"
      />
      <meta
        name="description"
        content="Explore The Wild Oasis Booking by Alamin (CodePapa360). Find unique destinations, thrilling activities, and plan your next wild getaway."
      />
      <meta name="application-name" content="The Wild Oasis Booking" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta
        name="apple-mobile-web-app-title"
        content="The Wild Oasis Booking"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="author" content="Alamin, CodePapa360" />
      <meta property="og:author" content="Alamin, CodePapa360" />

      <meta
        name="keywords"
        content="Wild Oasis,
            Wild Oasis Booking,
            The Wild Oasis Website,
            Nextjs project,
            Thrilling Experiences,
            Adventure,
            Travel,
            Adventure Trips, 
            Jonas Schmedtmann, 
            Alamin, 
            CodePapa360"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://the-wild-oasis-booking-alamin.vercel.app"
      />
      <meta property="og:title" content="The Wild Oasis Booking" />
      <meta
        property="og:description"
        content="Explore The Wild Oasis Booking by Alamin (CodePapa360). Find unique destinations, thrilling activities, and plan your next wild getaway."
      />
      <meta
        property="og:image"
        content="https://the-wild-oasis-booking-alamin.vercel.app/thumbnail.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://the-wild-oasis-booking-alamin.vercel.app/thumbnail.png"
      />
      <meta property="og:site_name" content="The Wild Oasis Booking" />
      <meta
        property="og:image:alt"
        content="Thumbnail image of The Wild Oasis Booking website"
      />
      <meta property="og:updated_time" content="2024-09-13T10:23:00Z" />

      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta property="og:locale" content="en_US" />
      <meta name="geo.region" content="BD-13" />
      <meta name="geo.placename" content="Dhaka" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Wild Oasis Booking" />
      <meta
        name="twitter:description"
        content="Explore The Wild Oasis Booking by Alamin (CodePapa360). Find unique destinations, thrilling activities, and plan your next wild getaway."
      />
      <meta
        name="twitter:image"
        content="https://the-wild-oasis-booking-alamin.vercel.app/thumbnail.png"
      />
      <meta
        name="twitter:url"
        content="https://the-wild-oasis-booking-alamin.vercel.app"
      />
      <meta name="twitter:site" content="@CodePapa360" />
      <meta name="twitter:creator" content="@CodePapa360" />
      <meta
        name="twitter:image:alt"
        content="Thumbnail image of The Wild Oasis Booking website"
      />
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-2 py-4 md:px-8 md:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <footer className="sr-only">
          @copyright by Alamin and Jonas Schmedtmann
        </footer>
      </body>
    </html>
  );
}
