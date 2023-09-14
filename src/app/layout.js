import './globals.css'
import { Inter } from 'next/font/google'
import GlobalState from '@/context'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Com - Your Trusted Online Shopping Destination',
  description: 'Discover a world of convenience and variety at E-Com, your trusted online shopping platform. Explore a wide range of quality products, from electronics to fashion, and shop with confidence. Experience hassle-free shopping today.',
  author: 'ARS',
  keywords: 'online shopping, e-commerce, quality products, fashion, trusted platform',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          <main>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
