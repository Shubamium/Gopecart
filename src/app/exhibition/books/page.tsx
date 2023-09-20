'use client'
import { useState } from 'react'
import './books.scss'

export default function BooksPage() {
	const [bookIndex,setBookIndex] = useState(0)
	const bookData = ['hey','heeey','heoo'];
	const prevPage = ()=>{setBookIndex((prev)=> Math.max(prev - 1,0))};
	const nextPage = ()=>{setBookIndex((prev)=> Math.min(prev + 1,bookData.length ))};
	return (
		<div id="container_book">
			<div className="book">
				{bookData.map((data,index)=>{
					const isFlipped = bookIndex > index 
					return ( 
						<div className={`page ${isFlipped ? 'flipped' : ''}`} key={`page-no-${index}`} style={{zIndex:isFlipped ? index : -index}} >
							<div className="page-side front" onClick={nextPage}>
								<h2>Front Side{index}</h2>
							</div>
							<div className="page-side back" onClick={prevPage}>
								<h2>Back Side Guys{index}</h2>
							</div>
						</div>
					)
				})}
				{/* <div className="page">
					<h2>Hey Guys</h2>
				</div> */}
				{/* <div className="page">
					<h2>Hey Gssuys</h2>
				</div>
				<div className="page reverse">
					<h2>Hey Guys</h2>
				</div>
				<div className="page">
					<h2>Hey Guys</h2>
				</div> */}
			</div>
			<button onClick={prevPage}>Previous Page</button>
			<p>{bookIndex}</p>
			<button onClick={nextPage}>Next Page</button>
		</div>
	)
}