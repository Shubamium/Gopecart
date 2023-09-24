

import { client, fetchData, urlFor } from '@/db/client';
import Commission, { commission } from './commission';
import './commission.scss'



// Mock Data
const commissionMockData:commission[] = [
	{
		name:'Headshot',
		subText:'+15$ per extra character',
		price:20,
		showcase:{
			big:'https://i.ibb.co/G0MsZqD/embedlinkicon.png',
			small:'https://i.ibb.co/G0MsZqD/embedlinkicon.png'
		}
	},
	{
		name:'Half Body',
		subText:'+15$ per extra character',
		price:40,
		showcase:{
			big:'https://i.ibb.co/G0MsZqD/embedlinkicon.png',
			small:'https://i.ibb.co/G0MsZqD/embedlinkicon.png'
		}
	},
	{
		name:'Full Body',
		subText:'+15$ per extra character',
		price:50,
		showcase:{
			big:'https://i.ibb.co/G0MsZqD/embedlinkicon.png',
			small:'https://i.ibb.co/G0MsZqD/embedlinkicon.png'
		}
	},
	{
		name:'Emotes / Stickers',
		subText:'Prices may vary depending on complexity',
		price:10,
		showcase:{
			big:'https://i.ibb.co/G0MsZqD/embedlinkicon.png',
			small:'https://i.ibb.co/G0MsZqD/embedlinkicon.png'
		}
	},
	{
		name:'Thumbnails',
		subText:'Prices may vary depending on complexity',
		price:50,
		showcase:{
			big:'https://i.ibb.co/G0MsZqD/embedlinkicon.png',
			small:'https://i.ibb.co/G0MsZqD/embedlinkicon.png'
		}
	},
]


// type commissionData =
export default async function CommissionPage() {
	
	let commissionData = await fetchData<any[]>(`*[_type == "commission"]{
		_id,
		id,
		title,
		detail,
		price,
		sample_big,
		sample_small
	 }`);
	
	const formatData = (commissionData:any[])=>{
		return commissionData.map((comms)=>{
		
			let imageList = [comms.sample_big,comms.sample_small] 
			imageList = imageList.map((data)=>{
				try{
					return urlFor(data).url() 
				}catch{
					return ''
				}
			})
			
			return {
				name:comms.title,
				subText:comms.detail,
				price:comms.price,
				showcase:{
					big:imageList[0],
					small:imageList[1]
				}
			} as commission
		})
	}

	commissionData = formatData(commissionData);

	

	return (
		<div id="container_commission">
			<Commission commissionData={commissionData}/>
		</div>
	)
}
