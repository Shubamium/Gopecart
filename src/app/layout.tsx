import Navigation from '@/components/general/navigation/Navigation'
import './globals.scss'
import type { Metadata } from 'next'
import { Amarante,Baskervville } from 'next/font/google'
import Footer from '@/components/general/footer/Footer'

const amarante = Amarante({ subsets: ['latin'],weight:'400',variable:"--font-main" })
const baskerville = Baskervville({ subsets: ['latin'], weight:'400',variable:"--font-secondary" })

export const metadata: Metadata = {
  title: 'Gopecart',
  description: 'Gopecart site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<body className={`${amarante.variable} ${baskerville.variable}`}>
			<header id='header'>
				<Navigation/>
			</header>
			<main>
			{children}
			</main>
			<Footer/>
		</body>
    </html>
  )
}
