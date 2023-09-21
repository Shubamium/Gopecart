import Contacts from '../contacts/Contacts'
import './footer.scss'

export default function Footer() {
	return (
		<footer id="footer" >
			<div className="left">
				<h2>GOPECART</h2>
				<Contacts showText={true}/>
				<svg className='decor_arrow' xmlns="http://www.w3.org/2000/svg" width="100%" height="12" viewBox="0 0 447 12" fill="none">
					<path d="M446.773 6L441 0.226497L435.227 6L441 11.7735L446.773 6ZM0 7H441V5H0V7Z" fill="white"/>
				</svg>
			</div>
			<a href="https://twitter.com/shubamium2" target={'_blank'} className='credits'>Website Design by Shubamium</a>
		</footer>
	)
}