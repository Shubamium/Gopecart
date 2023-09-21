'use client'
import './roulette.scss'
import {useEffect,useRef} from 'react'
export default function RoulettePage() {
	const rouletteRef = useRef<HTMLImageElement>(null);
	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			if(rouletteRef.current){
				const rouletteEl = rouletteRef.current;
				rouletteEl.style.rotate = `${window.scrollY/8}deg`
			}
		})
	},[]);
	const imageList = [
		'https://i.ibb.co/vQFYPwV/thumb1.png',
		'https://i.ibb.co/hC3NCGr/thumb2.png',
		'https://pbs.twimg.com/media/F6BhoHLXsAALs07?format=jpg&name=large',
		'https://i.ibb.co/PjNzxzY/thumb3.jpg',
		'https://i.ibb.co/Thp4RqN/thumb4.jpg',

	]
	return (
		<div id="container_roulette">
			<div className="roulette">
				<img src="/static/art/roulette_wheel.png" alt="" className='decor_roulette' ref={rouletteRef} />
				<img src="/static/art/roulette_arrow.png" alt="" className='decor_arrow' />
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
		</div>
	)
}

function SpinnerImage({src}:{src:string}){
	const spinnerRef = useRef<HTMLDivElement>(null);
	useEffect(()=>{
		const handleScroll = () => {
			if(spinnerRef.current){
				// Get the center coordinate of the element 
				const centerCoordinate = spinnerRef.current.offsetTop + spinnerRef.current.clientHeight / 2 ;
				
				// Get the height of the screen
				const screenCenter = window.innerHeight / 2 

				// Get the offset position of the element from center
				const offsetCenter = centerCoordinate - screenCenter  - window.scrollY
				
				// Normalize the valuet to range of -1 <=> 1
				let normalizedOffsetCenter = offsetCenter / screenCenter;
				
				// Clamp the value between the range
				normalizedOffsetCenter = Math.max(Math.min(normalizedOffsetCenter,1),-1)
				
				
				// Exponential translation function
				const  translateToExponential = (input:number, exponent:number) => {
					// Ensure input is within the range [-1, 1]
					input = Math.max(Math.min(input, 1), -1);
				
					// Compute the sign of the input
					const sign = Math.sign(input);
				
					// Compute the exponential translation
					const output = sign * Math.pow(Math.abs(input), exponent);
				
					return output;
				}
				
				// Set the desired exponent for the exponential range (e.g., 2 for quadratic)
				const exponent = 2;
				
				// Translate the value to an exponential range
				const exponentialValue = translateToExponential(normalizedOffsetCenter, exponent);
				
				console.log(exponentialValue);
				
				const scaleDownFactor = .5 * Math.abs(exponentialValue)
				
				// Set the styling of the image
				spinnerRef.current.style.scale =`${1.2-scaleDownFactor}`;
			}
		}
		window.addEventListener('scroll',handleScroll)
		return ()=>{
			window.removeEventListener('scroll',handleScroll)
		}
	},[])
	return (
		<div className="spinner-image" ref={spinnerRef} >
			<img src={src} alt="" />
		</div>
	)
}