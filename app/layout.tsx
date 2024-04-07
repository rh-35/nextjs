import "./global.css";
import { Navbar } from "@/components/ui/navbar";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rhea",
  description: "It Hurt Itself In Confusion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-950 overflow-x-hidden">
        <Navbar />
        <main className="h-sreen w-full">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
