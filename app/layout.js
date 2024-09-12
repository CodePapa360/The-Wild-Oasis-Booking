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
    template: "%s | The Wild Oasis | Alamin (CodePapa360)",
    default: "The Wild Oasis | Alamin (CodePapa360)",
  },

  description:
    "Explore The Wild Oasis by Alamin (CodePapa360), a platform that connects you with the best adventure experiences. Find unique destinations, thrilling activities, and plan your next wild getaway.",
  applicationName: "The Wild Oasis",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Wild Oasis",
    "The Wild Oasis Website",
    "Thrilling Experiences",
    "Adventure",
    "Travel",
    "Getaway",
    "Adventure Trips",
    "Jonas Schmedtmann",
    "Alamin",
    "CodePapa360",
  ],
  authors: [{ name: "Alamin (CodePapa360)" }],
  colorScheme: "dark",
  themeColor: "#141c24",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "The Wild Oasis",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://wild-oasis-customer-codepapa360.vercel.app/",
    title: "The Wild Oasis | Alamin (CodePapa360)",
    description:
      "Discover new adventures with The Wild Oasis by Alamin (CodePapa360). From hiking trails to exotic locations, we connect you with unforgettable experiences.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "The Wild Oasis - Alamin (CodePapa360)'s Adventure Platform",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    siteName: "The Wild Oasis",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wild Oasis | Alamin (CodePapa360)",
    description:
      "Plan your next adventure with The Wild Oasis by Alamin (CodePapa360). Explore thrilling destinations and experiences for the ultimate getaway.",
    images: ["/thumbnail.png"],
    site: "@CodePapa360",
    creator: "@CodePapa360",
    imageAlt: "The Wild Oasis - Alamin (CodePapa360)'s Adventure Platform",
  },
  alternates: {
    canonical: "https://wild-oasis-customer-codepapa360.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-2 py-4 md:px-8 md:py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
