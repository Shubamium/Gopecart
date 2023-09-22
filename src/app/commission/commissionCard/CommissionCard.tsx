import { commission } from "../commission"

export default function CommissionCard({order,total,commission,onClick}:{onClick:()=>void,order:number,total:number,commission:commission}){
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