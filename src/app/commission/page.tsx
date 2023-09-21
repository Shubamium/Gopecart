'use client'

import { useState } from 'react';
import './commission.scss'

type commission = {
	name:string;
	price:number;
}
export default function CommissionPage() {

	const commissionData:commission[] = [
		{
			name:'Package Name',
			price:50
		},
		{
			name:'Package Name',
			price:50
		},
		{
			name:'Package Name',
			price:50
		},
		{
			name:'Package Name',
			price:50
		},
		{
			name:'Package Name',
			price:50
		},{
			name:'Package Name',
			price:50
		}
	]

	const [activeCommission,setActieCommission] = useState(0);
	return (
		<div id="container_commission">
			<div className="commission-info-panel">
				<div className="detail">
					<h2 className='title'>FULL BODY</h2>
					<p className="sub-title">Details Here / Sub Text</p>
					<p className='price '>$50</p>
				</div>
				<div className="showcase">
					<h2 className='title'>Samples</h2>
					<div className="img-part">
						<img src="" className='img-large' alt="s" />
						<img src="" className='img-small' alt="s" />
					</div>
				</div>
			</div>
			<div className="table">
			<img src="/static/art/decor/commission_table.png" alt=""  className='decor_table'/>
			</div>
			<div className="cards">
				{commissionData.map((data,index)=>{
					return <CommissionCard commission={data} order={index} total={commissionData.length} key={'commision-card-'+index}/>
				})}
			</div>
			{/* <div className="character">
				
				<div className="dialogue">
				</div>
			</div> */}
		</div>
	)
}
function CommissionCard({order,total,commission}:{order:number,total:number,commission:commission}){
	const icons = [
		'spades',
		'club',
		'diamond',
		'heart'
	]
	return ( 
		<div className="card" style={{rotate:`${(order - Math.ceil(total/2))*5}deg`}}>
			<h2 className='name'>
				{commission.name}
			</h2>
			<img src={`/static/art/${icons[order % icons.length]}.png`} alt="" className='icon glow-purple' />
		</div>
	)
}