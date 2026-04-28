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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-3 focus:bg-paper focus:text-ink focus:text-[12px] focus:uppercase focus:tracking-[0.28em] focus:outline-none focus-visible:ring-2 focus-visible:ring-rojo"
        >
          Saltar al contenido
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
