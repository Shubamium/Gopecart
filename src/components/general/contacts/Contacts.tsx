import React from 'react'
import { FaDiscord, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

type Props = {
	showText?:boolean
}

export default function Contacts({showText}: Props) {
  return (
	<div className="contacts">
		<a href="https://www.youtube.com/c/GopecArt" target='_blank' className="contact">
			<FaYoutube/>
			{showText && <p className='text'>Youtube</p>}
		</a>
		<a href="https://twitter.com/gopec_" target='_blank' className="contact">
			<FaTwitter/>
			{showText && <p className='text'>Twitter</p>}

		</a>
		<a href="https://www.tiktok.com/@gopecart" target='_blank' className="contact">
			<FaTiktok/>
			{showText && <p className='text'>TikTok</p>}
		</a>
		<a href="https://discord.gg/NwVTMHt" target='_blank' className="contact">
			<FaDiscord/>
			{showText && <p className='text'>Discord</p>}
		</a>
	</div>
  )
}