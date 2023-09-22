'use client'
import { useEffect, useRef } from "react";
import SpinnerImage from "../spinnerImage/SpinnerImage"

type SpinnerWheelProps = {
	imageList:string[]
}
export default function SpinnerWheel({imageList}:SpinnerWheelProps){
	const rouletteRef = useRef<HTMLImageElement>(null);
	
	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			if(rouletteRef.current){
				const rouletteEl = rouletteRef.current;
				rouletteEl.style.rotate = `${window.scrollY/8}deg`
			}
		})
	},[imageList]);
	
	
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
						<SpinnerImage src={imgSrc} key={'spinner-img'+index}/>
					)	
				})}
			</div>
		</>
	)
}