import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SITE_NAME, SITE_AUTHOR, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_AUTHOR} · ${SITE_NAME}`,
    template: `%s | ${SITE_AUTHOR}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_AUTHOR} · ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/hero-milica.jpg", width: 4000, height: 6000 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_AUTHOR} · ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-milica.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
