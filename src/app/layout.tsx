import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Suspense fallback={<Loading/>}>
         {/* Navbar */}
         <Navbar/>
        {/* End Navbar */}

        {/* Main */}
        <main>
          <div className="bg-slate-100">
            {children}
          </div>
        </main>
        {/* End Main */}

        {/* Footer */}
        <Footer/>
        {/* End Footer */}
       </Suspense>
      </body>
    </html>
  )
}
