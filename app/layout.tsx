import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enkripsi Modern KI',
  description: 'Pembuatan aplikasi enkripsi modern untuk memenuhi salah satu mata kuliah keamanan informasi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={montserrat.className}>
        <div className="overflow-x-hidden">
          <Header/>
            {children}
          <Footer/> 
        </div>
      </body>
    </html>
  )
}
