import React from 'react'
import { DPIconSeerbit } from '../../assets/svg';

const Footer = () => {
  return (
    <div className='w-full py-16 bg-lightBlack flex items-center justify-between px-36 text-white text-base leading-amount'>
        <DPIconSeerbit />
        <div className='flex flex-row gap-2 font-["Montserrat"]'>
            <span> Shop </span>
            <span> / </span>
            <span>Info </span>
            <span> / </span>
            <span>Service </span>
            <span> / </span>
            <span>Contact </span>
            <span> / </span>
            <span>Privacy Policy</span>
        </div>

        <div className='flex flex-row gap-2 font-["Montserrat"]'>
        <span>Fb </span>
        <span> / </span>
            <span> ln </span>
            <span> / </span>
            <span>Yt </span>
            <span> / </span>
            <span>Tw </span>
        </div>
        </div>
  )
}

export default Footer;