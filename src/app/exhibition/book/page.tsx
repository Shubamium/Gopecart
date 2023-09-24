
import { client, fetchData } from '@/db/client';
import Book from './book'
import './book.scss'


type Page = {
	front_page:PageData,
	back_page:PageData
}

type PageData = {
	top:Section,
	bottom:Section
}
type Section = {
	image:any,
	title:string,
	description:any[]
}

export type bookData = {
	id:string,
	book_pages:Page[]

}


export default async function BooksPage() {
	
	const allPages = await fetchData<bookData[]>(`*[_type == "book" && id == "main"]{
		_id,
		id,
		book_pages
	 }`);
	console.log(allPages[0]);
	return (
		<div id="container_book">
			<Book bookData={allPages[0]}/>
		</div>
	)
}
