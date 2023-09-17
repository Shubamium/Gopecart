import './globals.scss'
import type { Metadata } from 'next'
import { Amarante,Baskervville } from 'next/font/google'

const amarante = Amarante({ subsets: ['latin'],weight:'400' })
const baskerville = Baskervville({ subsets: ['latin'], weight:'400' })

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
      <body className={amarante.className}>
	  	{children}
	  </body>
    </html>
  )
}
