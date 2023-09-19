'use client'
import useActivePath from '../hooks/useActivePath'
import './exhibitionNavigation.scss'

export default function ExhibitionNavigation() {
	const {isActive} = useActivePath();
	return (
		<nav id="container_exhibition-nav">
			<a href="/exhibition/books" className={`exhibition-link ${isActive('books') ? 'active' : ''}`}>Stickers/Emotes</a>
			<a href="/exhibition/slots" className={`exhibition-link ${isActive('slots') ? 'active' : ''}`}>Characters</a>
			<a href="/exhibition/roulette" className={`exhibition-link ${isActive('roulette') ? 'active' : ''}`}>Thumbnails</a>
		</nav>
	)
}