'use client'
import arrayShuffle from 'array-shuffle'
import './slots.scss'
import { useEffect, useState } from 'react'

const allImageLink = [
	'https://i.ibb.co/W08Y4w0/Temno.png',
	'https://i.ibb.co/wdwVTzJ/Fqf-NNc-TXw-AMTKfp.jpg',
	'https://i.ibb.co/9gFZbfV/Fs-M03-Wj-WAAMOTTh.jpg',
	'https://i.ibb.co/8n3SbvM/Pond-Drowned-Crossarms.png',
	'https://i.ibb.co/yWQwwsf/IMG-8180.webp'
]

export default function SlotsPage() {

	const [isPlaying,setIsPlaying] = useState(false);
	const [canPlay,setCanPlay] = useState(true);
	const [activeImages,setActiveImages] = useState(['','','']);
	const animationDuration = 4000;

	
	const startSlots = ()=>{
		setCanPlay(false)
		if(isPlaying){
			setIsPlaying(false);
			setTimeout(() => {
				setIsPlaying(true);
				setCanPlay(true);
				randomizeImage();
			}, animationDuration + 2500);
		}else{
			setIsPlaying(true)
			randomizeImage();
			setTimeout(() => {
				setIsPlaying(true)
				setCanPlay(true)
			}, animationDuration + 1500);
		}
	}
	const randomizeImage = ()=>{
		const imageList = [];
		for(let i = 0; i <= 2; i++){
			imageList.push(allImageLink[Math.floor(Math.random()*allImageLink.length)]);
		}
		console.log(imageList)
		setActiveImages(imageList);
	}
	return (
		<div id="container_slots">
			<div className="slots">
				<div className="slots_machine">
					<div className="machine">
						<img src="/static/art/slot_machine.png" className='machine_bg' alt="" />
					</div>
					<div className="wheel-frame">
						<div className="frame">
							<img src="/static/art/slot_frame.png" className='frame_bg'  alt="" />
							<div className={`strip ${isPlaying ? 'scroll moving': ' '}`}>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<div className="strip-image">
									<img src={activeImages[0]} alt="" />
								</div>
							</div>
						</div>
						<div className="frame">
							<img src="/static/art/slot_frame.png" className='frame_bg'  alt="" />
							<div className={`strip ${isPlaying ? 'scroll moving': ' '}`}>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<div className="strip-image">
									<img src={activeImages[1]} alt="" />
								</div>
							</div>
						</div>
						<div className="frame">
							<img src="/static/art/slot_frame.png"  className='frame_bg' alt="" />
							<div className={`strip ${isPlaying ? 'scroll moving': ' '}`}>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<StripLoop/>
								<div className="strip-image">
									<img src={activeImages[2]} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button onClick={startSlots} disabled={!canPlay} className='pull-btn'>Pull</button>
		</div>
	)
}

let stripIcon = [
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

function StripLoop(){
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