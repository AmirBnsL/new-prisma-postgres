import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });
import Providers from './components/Provider';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>{children}</body>
    </Providers>
    </html>
  )
}
