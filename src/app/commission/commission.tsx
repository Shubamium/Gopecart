'use client'
import React, { useState } from 'react'
import CommissionCard from './commissionCard/CommissionCard'
import { TbTriangleInvertedFilled } from 'react-icons/tb';

export type commission = {
	name:string;
	subText:string;
	price:number;
	showcase:{
		big:string,
		small:string
	}
}

type CommissionProps = {
	commissionData: commission[]
}



export default function Commission({commissionData}: CommissionProps) {
	const [activeCommission,setActiveCommission] = useState(0);

	return (
		<>
				
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
						Hey Guys, I&#039;m Gopec D. Art! An awesome artist who loves to create. A jack of all trades from doodles to masterpieces, let me help make your ideas a digital reality! I hope you enjoy your visit c:
					</p>

					<div className="continue-dialogue">
						<TbTriangleInvertedFilled/>
					</div>
				</div>
			</div>
		</>
  )
}