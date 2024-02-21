import "./global.css";
import { Navbar } from "@/components/ui/navbar";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Rhea',
  description: 'It Hurt Itself In Confusion',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-950">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
