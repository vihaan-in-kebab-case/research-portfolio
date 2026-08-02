import type { Metadata } from "next";
import { Pixelify_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vihaan's Research Portfolio",
  description: "An open research notebook that documents how my ideas evolve, not just what I've built.",
  openGraph: {
    title: "Vihaan's Research Portfolio",
    description: "An open research notebook that documents how my ideas evolve, not just what I've built.",
    url: "https://research-portfolio-phi.vercel.app",
    siteName: "Vihaan's Research Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main className="mx-auto max-w-5xl px-6">{children}</main>
        <footer className="mx-auto mt-16 flex max-w-5xl flex-col gap-1.5 border-t border-border-soft px-6 py-8 font-mono text-[11px] text-text-faint md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} — vihaan's open, ever-expanding research notebook</span>
        </footer>
      </body>
    </html>
  );
}
