import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted Produkt Regular (the licensed display font used on the original
// site). Exposed as the --font-produkt CSS variable; globals.css feeds it into
// --font-display.
const produkt = localFont({
  src: "./fonts/produkt-regular.woff2",
  variable: "--font-produkt",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BXVenture Capital — Coming Soon",
  description: "BXVenture Capital. Something new is on the way.",
  openGraph: {
    title: "BXVenture Capital — Coming Soon",
    description: "BXVenture Capital. Something new is on the way.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={produkt.variable}>
      <body>{children}</body>
    </html>
  );
}
