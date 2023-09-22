
'use client'
import { MouseEventHandler, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { bookData } from './page';
import { urlFor } from '@/db/client';
import PortableText from 'react-portable-text';

type Props = {
	bookData:bookData
}


// Mock Data
const stickers = [
	'https://i.ibb.co/QrccgmM/sticker-1.png',
	'https://i.ibb.co/yWFMnrc/sticker-2.png',
	'https://i.ibb.co/gWyxMf7/sticker-3.png',
	'https://i.ibb.co/QrSzX0v/sticker-4.png'
]

export default function Book({bookData}: Props) {
	const [bookIndex,setBookIndex] = useState(0)
	const [delay,setDelay] = useState(false);

	// const bookData = ['hey','heeey','heoo','heeye','egegeg','awdawdaw'];
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

		setBookIndex((prev)=> Math.min(prev + 1,bookData.book_pages.length))

		setTimeout(()=>{setDelay(false)},delayTime);
	};


	return (
		<>
		<div className="book">
			{bookData && bookData.book_pages && bookData.book_pages.map((data,index)=>{
				// const isNearBack = index < bookIndex+range-1 && index > bookIndex-range-1; 
		
				// Book Data
				const frontPage = data.front_page;
				const backPage = data.back_page;

				if(!frontPage.top) return <></>


				// Pages Setting
				const isFlipped = bookIndex > index
				const range = 2
				const isNear = index <= bookIndex+range && index >= bookIndex-range; 


				// Props
				const zIndex = {zIndex: isFlipped ? (bookIndex === index ? 200 : index+1) : -index+1};
				const className = `page ${isFlipped ? 'flipped' : ''} ${isNear ? 'near' : ''} ${isNear ? ' visible-img':' hidden-img'}`

				return ( 
					<div className={className} key={`page-no-${index}`} style={zIndex}>

						{/* Front Page */}
						<div className="page-side front" onClick={nextPage}>
							{frontPage && (
								<>
									{/* Top Section */}
									{frontPage.top && (
										<section className="sticker-showcase top">
											<div className="img-part">
												{isNear && <img src={urlFor(frontPage.top.image).url()} alt="" />}
											</div>
											<div className="text-part">
												<h2>{frontPage.top.title}</h2>
												{frontPage.top.description && <>
													<hr />
													<PortableText content={frontPage.top.description}/>
												</>}
											</div>
										</section>
									)}

									{/* Bottom Section */}
									{frontPage.bottom && (
										<section className="sticker-showcase bottom">
											<div className="text-part">
												<h2>{frontPage.bottom.title}</h2>
												{frontPage.bottom.description && <>
													<hr />
													<PortableText content={frontPage.bottom.description}/>
												</>}
											</div>
											<div className="img-part">
												{isNear && <img src={urlFor(frontPage.bottom.image).url()} alt="" />}
											</div>
										</section>
									)}
								</>
							)}
						</div>

						{/* Back Page */}
						<div className="page-side back" onClick={prevPage}>
							{backPage && (
								<>
									{/* Top Section */}
									{backPage.top && (
										<section className="sticker-showcase top">
											<div className="img-part">
												{isNear && <img src={urlFor(backPage.top.image).url()} alt="" />}
											</div>
											<div className="text-part">
												<h2>{backPage.top.title}</h2>
												{backPage.top.description && <>
													<hr />
													<PortableText content={backPage.top.description}/>
												</>}
											</div>
										</section>
									)}

									{/* Bottom Section */}
									{backPage.bottom && (
										<section className="sticker-showcase bottom">
											<div className="text-part">
												<h2>{backPage.bottom.title}</h2>
												{backPage.bottom.description && <>
													<hr />
													<PortableText content={backPage.bottom.description}/>
												</>}
											</div>
											<div className="img-part">
												{isNear && <img src={urlFor(backPage.bottom.image).url()} alt="" />}
											</div>
										</section>
									)}
								</>
							)}
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
		</>
	)
}