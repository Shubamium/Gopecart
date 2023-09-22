'use client'
import React, { useState } from 'react'
import StripLoop from './stripLoop/StripLoop';

// Mock data
const allImageLink = [
	'https://i.ibb.co/W08Y4w0/Temno.png',
	'https://i.ibb.co/wdwVTzJ/Fqf-NNc-TXw-AMTKfp.jpg',
	'https://i.ibb.co/9gFZbfV/Fs-M03-Wj-WAAMOTTh.jpg',
	'https://i.ibb.co/8n3SbvM/Pond-Drowned-Crossarms.png',
	'https://i.ibb.co/phYFSXy/thumb5.jpg'
]
type Props = {
	images:string[]
}

export default function Slots({images}: Props) {

	images = images ? images : allImageLink 

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
				randomizeImage();
				setTimeout(() => {
					setCanPlay(true);
				}, animationDuration + 2500);
			}, animationDuration + 2500);
		}else{
			setIsPlaying(true)
			randomizeImage();
			setTimeout(() => {
				setIsPlaying(true)
				setCanPlay(true)
			}, animationDuration + 2500);
		}
	}

	const randomizeImage = ()=>{
		const imageList = [];
		for(let i = 0; i <= 2; i++){
			imageList.push(images[Math.floor(Math.random()*images.length)]);
		}
		setActiveImages(imageList);
	}

	return (
		<>
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
		</>
	)
}