import "./global.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Brooke Milberg",
  description: "What am I?"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex-col bg-zinc-950 h-lvh w-screen overflow-x-hidden">
        <Navbar />
        <main className="h-full w-screen">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
