'use client'
import React, { useRef, useState } from 'react'
import StripLoop from './stripLoop/StripLoop';
import useLightbox from '@/components/hooks/useLightbox';
import Lightbox from '@/components/general/lightbox/Lightbox';

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

	// Audio List
	const audioSpin = useRef<HTMLAudioElement>(null);
	const audioPull = useRef<HTMLAudioElement>(null);

	
	const animationDuration = 4000;

	const startSlots = ()=>{
		setCanPlay(false)
		playLeverAudio()
		if(isPlaying){
			setIsPlaying(false);
			playSpinnerAudio()
			setTimeout(() => {
				setIsPlaying(true);
				randomizeImage();
				playSpinnerAudio();
				setTimeout(() => {
					setCanPlay(true);
				}, animationDuration + 2500);
			}, animationDuration + 2500);
		}else{
			setIsPlaying(true)
			randomizeImage();
			playSpinnerAudio();
			setTimeout(() => {
				setIsPlaying(true)
				playSpinnerAudio();
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
	
	const playLeverAudio = ()=>{
		if(audioPull.current){
			audioPull.current.play()
		}
	}

	const playSpinnerAudio = ()=>{
		const play = () => {
			if(audioSpin.current){
				// audioSpin.current.play();/
				const newAudio = document.createElement('audio');
				newAudio.src = audioSpin.current.src;

				document.body.appendChild(newAudio);
				newAudio.playbackRate = 1.05
				newAudio.play()
				newAudio.volume = .5
				newAudio.addEventListener('ended',()=>{
					if(newAudio.ended){
						document.body.removeChild(newAudio)
					}
				})
			}
		}

		setTimeout(() => {
			play()
		}, 1600);
		setTimeout(() => {
			play()
		} ,2800)
	
	}
	const { closeLightbox,showImage,state} = useLightbox();

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
										<img src={activeImages[0]} alt="" onClick={()=>showImage(activeImages[0])} />
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
										<img src={activeImages[1]} alt=""  onClick={()=>showImage(activeImages[1])}/>
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
										<img src={activeImages[2]} alt=""onClick={()=>showImage(activeImages[2])} />
									</div>
								</div>
							</div>
						</div>
						<div className="lever">
							<div className="lever-slider">
								<img src="/static/art/slot_lever.png" alt=""  className={`decor_lever ${!canPlay ? 'pulling' : ''} glow-purple`} onClick={()=>{canPlay && startSlots()}}/>
							</div>
						</div>
					</div>
			</div>
			<audio ref={audioPull} src='/static/audio/lever_pull.wav' controls={false}></audio>
			<audio ref={audioSpin} src='/static/audio/wheelspin.mp3' controls={false}></audio>

			<button onClick={startSlots} disabled={!canPlay} className='pull-btn'>Pull</button>
			{state.isOpen && <Lightbox src={state.src} onCloseBox={closeLightbox}/>}

		</>
	)
}