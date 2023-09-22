'use client'
import arrayShuffle from "array-shuffle"
import { useEffect, useState } from "react"

const stripIcon = [
	<div className="strip-section" key={'spades-strip'}>
		<img src="/static/art/spades.png" alt="" className='symbols' />
	</div>,
	<div className="strip-section" key={'club-strip'}>
		<img src="/static/art/club.png" alt="" className='symbols' />
	</div>,
	<div className="strip-section" key={'heart-strip'}>
		<img src="/static/art/heart.png" alt="" className='symbols' />
	</div>,
	<div className="strip-section" key={'diamond-strip'}>
		<img src="/static/art/diamond.png" alt="" className='symbols' />
	</div>
]


export default function StripLoop(){

	const [strip,setStrip] = useState(stripIcon)

	useEffect(()=>{
		setStrip(arrayShuffle(strip))
	},[])
	
	return (
		<>
			{strip}
		</>
	)
}
