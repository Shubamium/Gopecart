'use client'
import { createPortal } from 'react-dom'
import './lightbox.scss'

import React, { ReactPortal, useState }  from 'react'
type LightboxProps = {
	src:string
	onCloseBox:()=>void;
}

export default function Lightbox({src,onCloseBox}: LightboxProps) {
	return (
		createPortal(
		<div className='lightbox' onClickCapture={()=>{onCloseBox}}>
			<button className='lightbox-close-btn' onClick={onCloseBox}>Close</button>
			<img src={src} alt="" />
		</div>,document.body)
  	)
}