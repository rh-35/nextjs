import "./global.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"


export const metadata = {
  title: "Brooke Milberg",
  description: "What am I?"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex-col h-full w-screen overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Navbar />
            <main className="h-full w-screen">{children}</main>
            <Footer />
            <Analytics />
            <SpeedInsights />
            </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
