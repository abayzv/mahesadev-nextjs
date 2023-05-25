import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import { Suspense } from 'react'
import Loading from './loading'
import Head from 'next/head'
import { getSession } from '../../utils/hasSession'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kereta Api Indonesia | Mahesadev',
  description: 'Situs ini dibuat sebagai portofolio untuk menunjukkan kemampuan saya dalam membangun aplikasi web dengan menggunakan teknologi terbaru.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
       <Suspense fallback={<Loading/>}>
         {/* Navbar */}
         <Navbar session={session}/>
        {/* End Navbar */}

        {/* Main */}
        {/* <main>
          <div className="bg-slate-100">
            {children}
          </div>
        </main> */}
        {/* End Main */}

        {/* Footer */}
        {/* <Footer/> */}
        {/* End Footer */}
       </Suspense>
      </body>
    </html>
  )
}
