'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import './home.scss'

import {FaDiscord,FaTiktok,FaTwitter,FaYoutube} from 'react-icons/fa'


export default function Home() {
	const [activeContent,setActiveContent] = useState(0);
	const containerRef =  useRef<HTMLDivElement>(null)
	const contents = [
		(
			<article id='section_title-image' key={'section_title-image'}>
				<h1 style={{visibility:'hidden'}}>GOPECART</h1>
				<img src="/static/title.png" alt="GOPECART" />
			</article>
		),
		(
			<article id='section_contacts' key={'section_title-image'}>
				<div className="contacts-header">
					<svg className='decor_list' xmlns="http://www.w3.org/2000/svg" width="431" height="36" viewBox="0 0 431 36" fill="none">
						<path d="M430.563 22.2981L420.592 15.1853L413.479 25.1557L423.45 32.2685L430.563 22.2981ZM23.1469 13.914C23.2369 14.7375 23.9775 15.3321 24.801 15.2421C25.6245 15.1521 26.2191 14.4115 26.1291 13.588L23.1469 13.914ZM421.774 22.2475C407.021 24.7153 376.622 26.6446 338.771 28.1268C300.959 29.6074 255.813 30.6387 211.632 31.3263C123.251 32.7019 38.8103 32.7008 24.6941 32.1736L24.5821 35.1716C38.7924 35.7022 123.315 35.7012 211.679 34.326C255.871 33.6382 301.043 32.6064 338.889 31.1245C376.695 29.6441 407.293 27.7115 422.269 25.2064L421.774 22.2475ZM24.6941 32.1736C17.8426 31.9178 13.0669 30.1446 9.85388 27.7113C6.64908 25.2843 4.89917 22.1268 4.20965 18.9026C3.51555 15.657 3.89892 12.3477 4.97339 9.69132C6.06327 6.9968 7.76294 5.19376 9.51629 4.59224L8.54278 1.75459C5.6714 2.73967 3.46895 5.41011 2.19228 8.56641C0.900195 11.7608 0.452576 15.6797 1.27598 19.53C2.10397 23.4017 4.22007 27.208 8.04271 30.1029C11.8571 32.9916 17.2703 34.8985 24.5821 35.1716L24.6941 32.1736ZM9.51629 4.59224C13.9777 3.06165 17.0207 3.22165 19.0418 4.55709C21.0807 5.90424 22.5853 8.77654 23.1469 13.914L26.1291 13.588C25.5345 8.14769 23.8596 4.1446 20.6956 2.0541C17.514 -0.0481111 13.3308 0.111961 8.54278 1.75459L9.51629 4.59224Z" fill="#5A4110"/>
					</svg>
					<h2>Contacts</h2>
				</div>
				<div className="contacts">
					<a href="https://www.youtube.com/c/GopecArt" target='_blank' className="contact">
						<FaYoutube/>
					</a>
					<a href="https://twitter.com/gopec_" target='_blank' className="contact">
						<FaTwitter/>
					</a>
					<a href="https://www.tiktok.com/@gopecart" target='_blank' className="contact">
						<FaTiktok/>
					</a>
					<a href="https://discord.gg/NwVTMHt" target='_blank' className="contact">
						<FaDiscord/>
					</a>
				</div>
			</article>
		),
	]
	useEffect(()=>{
		const handleScroll = ()=>{
			const contentIndex =  Math.floor(window.scrollY / (window.innerHeight / 2))
			setActiveContent(contentIndex);
			console.log(contentIndex)
		}
		window.document.addEventListener('scroll',handleScroll)
		handleScroll()
		return ()=>{
			window.document.removeEventListener('scroll',handleScroll);
		}
	},[])

	
	return (
		<div id='container_home' >
			<div className="scroll-container" ref={containerRef}>
				<section id="decoration">
					<div className="blackhole">
						<img src="/static/art/blackhole.png" alt="" className='decor_blackhole'  />
						<img src="/static/art/decor/decor_normal-ring.png" alt="" className='decor_ring glow-purple'  />
						<img src="/static/art/decor/decor_normal-ring.png" alt="" className='decor_ring_hr glow-purple fadejs' />
						{/* <img src="/static/art/decor/decor_normal-ring.png" alt="" className='decor_ring_hr second' /> */}
						<div className='decor_stars glow-purple' />

					</div>
					<img src="/static/art/decor/decor_content-ring.png" alt="" className="content-bg" />
				</section>
				<section className='home-content'>
					{contents.map((content,index:number)=>{
						return <HomeContent key={'home-content'+index} isActive={index === Math.min(activeContent,contents.length-1)}>
							{content}
						</HomeContent>
					})}
				</section>
			</div>
		</div>
	)
}



type HomeContentProps={
	children:React.ReactNode;
	isActive:boolean;
}
function HomeContent({children,isActive}:HomeContentProps){
	return (
		<div className={`content ${isActive ? 'active' : '' }`} >
			{children}
		</div>
	)
}