'use client'
import { MouseEventHandler, useState } from 'react'
import './book.scss'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function BooksPage() {
	const [bookIndex,setBookIndex] = useState(0)
	const [delay,setDelay] = useState(false);

	const bookData = ['hey','heeey','heoo','heeye','egegeg','awdawdaw'];
	const delayTime = 800;
	const prevPage = ()=>{
		setDelay(true)
		if(delay)return;
		
		setBookIndex((prev)=> Math.max(prev - 1,0))

		setTimeout(()=>{setDelay(false)},delayTime);
	};
	const nextPage = ()=>{
		setDelay(true)
		if(delay)return;

		setBookIndex((prev)=> Math.min(prev + 1,bookData.length))

		setTimeout(()=>{setDelay(false)},delayTime);
	};
	const stickers = [
		'https://i.ibb.co/QrccgmM/sticker-1.png',
		'https://i.ibb.co/yWFMnrc/sticker-2.png',
		'https://i.ibb.co/gWyxMf7/sticker-3.png',
		'https://i.ibb.co/QrSzX0v/sticker-4.png'
	]
	return (
		<div id="container_book">
			<div className="book">
				{bookData.map((data,index)=>{
					const isFlipped = bookIndex > index
					const range = 2
					const isNear = index <= bookIndex+range && index >= bookIndex-range; 
					const isNearBack = index < bookIndex+range-1 && index > bookIndex-range-1; 
					const isActive = bookIndex === index

					const setZIndex = ()=>{
						return isFlipped ? 100+index : bookData.length-index-1;
					}
					return ( 
						<div 
							className={`page ${isFlipped ? 'flipped' : ''} ${isNear ? 'near' : ''} ${isNear ? ' visible-img':' hidden-img'}`} 
							key={`page-no-${index}`} 
							style={{zIndex: isFlipped ? (bookIndex === index ? 200 : index+1) : -index+1}}>
							<div className="page-side front" onClick={nextPage}>
								<section className="sticker-showcase top">
									<div className="img-part">
										{isNear && <img src={stickers[0]} alt="" />}
									</div>
									<div className="text-part">
										<h2>Post-it Note</h2>
										<hr />
										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, atque. Asperiores inventore aliquid commodi voluptatum ipsam enim explicabo minus, in a nihil natus deserunt provident fugit atque libero quidem. Est facilis ullam quisquam accusantium tempora sunt architecto aut odio dolorem aliquam, totam ipsa illo reiciendis id. Aperiam quis ab numquam?</p>
									</div>
								</section>
								<section className="sticker-showcase bottom">
									<div className="text-part">
										<h2>Post-it Note {index}</h2>
										<hr />
										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, atque. Asperiores inventore aliquid commodi voluptatum ipsam enim explicabo minus, in a nihil natus deserunt provident fugit atque libero quidem. Est facilis ullam quisquam accusantium tempora sunt architecto aut odio dolorem aliquam, totam ipsa illo reiciendis id. Aperiam quis ab numquam?</p>
									</div>
									<div className="img-part">
										{isNear && <img src={stickers[1]} alt="" />}
									</div>
								</section>
							</div>
							<div className="page-side back" onClick={prevPage}>
							<section className="sticker-showcase top">
									<div className="img-part">
										{isNearBack && <img src={stickers[3]} alt="" />}
									</div>
									<div className="text-part">
										<h2>Post-it Note{index} back</h2>
										<hr />
										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, atque. Asperiores inventore aliquid commodi voluptatum ipsam enim explicabo minus, in a nihil natus deserunt provident fugit atque libero quidem. Est facilis ullam quisquam accusantium tempora sunt architecto aut odio dolorem aliquam, totam ipsa illo reiciendis id. Aperiam quis ab numquam?</p>
									</div>
								</section>
								<section className="sticker-showcase bottom">
									<div className="text-part">
										<h2>Post-it Note</h2>
										<hr />
										<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, atque. Asperiores inventore aliquid commodi voluptatum ipsam enim explicabo minus, in a nihil natus deserunt provident fugit atque libero quidem. Est facilis ullam quisquam accusantium tempora sunt architecto aut odio dolorem aliquam, totam ipsa illo reiciendis id. Aperiam quis ab numquam?</p>
									</div>
									<div className="img-part">
										{isNearBack && <img src={stickers[2]} alt="" />}
									</div>
								</section>
							</div>
						</div>
					)
				})}
				<div className="book-nav">
					<div className="spade-nav left glow-purple" onClick={prevPage}>
						<img src="/static/art/book_spade-nav.png" alt="" />
					</div>
					<div className="spade-nav right glow-purple" onClick={nextPage}>
						<img src="/static/art/book_spade-nav.png" alt="" />
					</div>
				</div>
			</div>
			<div className="bottom-nav">
				<button onClick={prevPage}><FaArrowLeft/> Previous Page</button>
				<p>{bookIndex}</p>
				<button onClick={nextPage}>Next Page  <FaArrowRight/></button>
			</div>
		</div>
	)
}
