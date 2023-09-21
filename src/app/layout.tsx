import Navigation from '@/components/general/navigation/Navigation'
import './globals.scss'
import type { Metadata } from 'next'
import { Amarante,Baskervville } from 'next/font/google'
import Footer from '@/components/general/footer/Footer'

const amarante = Amarante({ subsets: ['latin'],weight:'400',variable:"--font-main" })
const baskerville = Baskervville({ subsets: ['latin'], weight:'400',variable:"--font-secondary" })

const title = 'Gopec Art Shop c:';
const description = " Hey Guys, I'm Gopec D. Art! An awesome artist who loves to create. A jack of all trades from doodles to masterpieces, let me help make your ideas a digital reality! I hope you enjoy your visit c:";
const banner = "https://i.ibb.co/G0MsZqD/embedlinkicon.png"
const url = 'https://gopecartshop.vercel.app'
export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL(url),
  openGraph:{
	  url:url,
	  title:title,
	  description:description,
	  authors:"shubamium",
	  images:[
		  banner
	  ]
  },
	  twitter:{
	  title:title,
	  card:'summary_large_image',
	  images:[
		  banner
	  ]
  },
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
