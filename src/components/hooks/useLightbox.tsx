import { useState } from "react";

export default function useLightbox() {
	const [galleryImage, setGalleryImage] = useState('');
	const [gallery,setGallery] = useState(false);

	const showImage = (src:string)=>{
		setGalleryImage(src),
		setGallery(true)
	}
	const closeLightbox = ()=>{
		setGalleryImage(""),
		setGallery(false)
	}
	return {closeLightbox, showImage, state:{isOpen:gallery, src:galleryImage}};
}