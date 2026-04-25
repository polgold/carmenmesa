import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carmenmesa.com"),
  title: {
    default: "Carmen Mesa — Bailaora flamenca",
    template: "%s · Carmen Mesa",
  },
  description:
    "Carmen Mesa, bailaora andaluza. Espectáculos, clases y workshops de flamenco entre España y Argentina.",
  openGraph: {
    title: "Carmen Mesa — Bailaora flamenca",
    description:
      "Carmen Mesa, bailaora andaluza. Espectáculos, clases y workshops de flamenco entre España y Argentina.",
    images: ["/photos/photo-3.jpg"],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
