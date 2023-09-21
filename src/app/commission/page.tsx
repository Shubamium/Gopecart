'use client'

import { useState } from 'react';
import './commission.scss'
import {TbTriangleInvertedFilled} from 'react-icons/tb'
type commission = {
	name:string;
	subText:string;
	price:number;
	showcase:{
		big:string,
		small:string
	}
}
export default function CommissionPage() {

	const commissionData:commission[] = [
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

	const [activeCommission,setActiveCommission] = useState(0);
	return (
		<div id="container_commission">

			<div className="commission-info-panel">
				<div className="detail">
					<h2 className='title'>{commissionData[activeCommission].name}</h2>
					<p className="sub-title">{commissionData[activeCommission].subText}</p>
					<p className='price '>${commissionData[activeCommission].price}</p>
				</div>
				<div className="showcase">
					<h2 className='title'>Samples</h2>
					<div className="img-part">
						<img src={commissionData[activeCommission].showcase.big} className='img-large' alt="s" />
						<img src={commissionData[activeCommission].showcase.small} className='img-small' alt="s" />
					</div>
				</div>
			</div>

			<div className="table">
				<img src="/static/art/decor/commission_table.png" alt=""  className='decor_table'/>
			</div>

			<div className="cards">
				{commissionData.map((data,index)=>{
					return <CommissionCard onClick={()=>{setActiveCommission(index)}} commission={data} order={index} total={commissionData.length} key={'commision-card-'+index}/>
				})}
			</div>
			<div className="character">
				<img src="/static/art/gopec.png" alt="" className='portrait' />
				<div className="dialogue-box">
					<h2 className='name'>Gopec -</h2>
					<hr />
					<p className='dialogue'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minima. Dolor natus animi officiis explicabo unde? Possimus magnam quos quas, minus optio commodi ipsa non aspernatur, quo adipisci, neque eligendi.
					</p>

					<div className="continue-dialogue">
						<TbTriangleInvertedFilled/>
					</div>
				</div>
			</div>
		</div>
	)
}
function CommissionCard({order,total,commission,onClick}:{onClick:()=>void,order:number,total:number,commission:commission}){
	const icons = [
		'spades',
		'club',
		'diamond',
		'heart'
	]
	return ( 
		<div className="card" style={{rotate:`${(order - Math.ceil(total/2))*5}deg`}} onClick={onClick}>
			<h2 className='name'>
				{commission.name}
			</h2>
			<img src={`/static/art/${icons[order % icons.length]}.png`} alt="" className='icon glow-purple' />
		</div>
	)
}