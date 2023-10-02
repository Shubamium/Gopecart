'use client'
import { useEffect, useRef, useState } from "react";
import SpinnerImage from "../spinnerImage/SpinnerImage"
import Lightbox from "@/components/general/lightbox/Lightbox";
import useLightbox from "@/components/hooks/useLightbox";
type SpinnerWheelProps = {
	imageList:string[]
}
export default function SpinnerWheel({imageList}:SpinnerWheelProps){
	const rouletteRef = useRef<HTMLImageElement>(null);
	const [scrollProgress,setScrollProgress] = useState(0);
	useEffect(()=>{
		const setupRoulette = ()=>{
			if(rouletteRef.current){
				const rouletteEl = rouletteRef.current;
				rouletteEl.style.rotate = `${window.scrollY/8}deg`
			}
		}
		const calculateProgress = ()=>{
			if(rouletteRef.current){
				setScrollProgress(
					Math.min(Math.round((window.scrollY/(document.body.scrollHeight-window.innerHeight*2))* 100),100)
				)
			}
		}
		window.addEventListener('scroll',()=>{
			setupRoulette()
			console.log(window.scrollY,document.body.scrollHeight)
			calculateProgress()
		})
	
		setupRoulette()
	},[])
	const {showImage,closeLightbox,state} = useLightbox();
	
	return ( 
		<>
			<div className="roulette">
				<img src="/static/art/roulette_arrow.png" alt="" className='decor_arrow' />
				<img src="/static/art/roulette_wheel.png" alt="" className='decor_roulette' ref={rouletteRef} />
			</div>
			<div className="container_spinner-image">
				<div className="decor_spinner">
					<img src="/static/art/roulette_spinner.png" alt=""  />
				</div>
				{imageList.map((imgSrc,index)=>{
					return ( 
						<SpinnerImage src={imgSrc} onClick={()=>{showImage(imgSrc)}} key={'spinner-img'+index}/>
					)	
				})}
			</div>
			<div className="title">
				<p>EXHIBITION - THUMBNAILS {scrollProgress} </p>
			</div>
			<div className="scroll-progress-indicator">
				{
					imageList.map((imgSrc,index)=>{
						
						const active = <img src="/static/art/chip_red.png" alt="" className="chip" />
						const hidden = <img src="/static/art/chip_silver.png" alt="" className="chip hidden" />
						return (
							index < scrollProgress/10 ? active : hidden
						)
					})
				}
			</div>
			{state.isOpen && <Lightbox src={state.src} onCloseBox={closeLightbox}/>}
		</>
	)
}