import { client, fetchData, urlFor } from '@/db/client';
import './roulette.scss'
import SpinnerWheel from './spineerWheel/SpinnerWheel';



type rouletteData = {
	id:string,
	images: any[]
}

export default async function RoulettePage() {
	
	const rouletteData = await fetchData<rouletteData[]>(`*[_type == "roulette" && id == "main"]{
		_id,
		id,
		images
	 }`);
	
	const imageList = rouletteData[0].images.map((data)=>{
		try{
			return urlFor(data).url() 
		}catch{
			return ''
		}
	})
	return (
		<div id="container_roulette">
			{<SpinnerWheel imageList={imageList}/>}
		</div>
	)
}

