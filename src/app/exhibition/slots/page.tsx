import './slots.scss'
import Slots from './slots'
import { client, urlFor } from '@/db/client';

type SlotsData = {
	id:string,
	images: any[]
}
export default async function SlotsPage() {
	const slotsData = await client.fetch<SlotsData[]>(`*[_type == "roulette" && id == "main"]{
		_id,
		id,
		images
	 }`,{
		next:{
			cache:5
		}
	});
	
	const imageList = slotsData[0].images.map((data)=>{
		try{
			return urlFor(data).url() 
		}catch{
			return ''
		}
	})
	return (
		<div id="container_slots">
			<Slots images={imageList}/>
		</div>
	)
}


