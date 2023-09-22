import { useEffect, useRef } from "react";

export default function SpinnerImage({src}:{src:string}){

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