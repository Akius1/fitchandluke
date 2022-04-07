import React from 'react';
import { DPIconLock, DPIconLogo, DPIconSearch } from '../../assets/svg';


const NavBar = ({}) => {
  return (
    <div className=' w-full  flex flex-row h-24 justify-between items-center py-2 px-24' >
        <div className='w-1/3 text-base text-lightBlack font-black leading-links capitalize'>
            <span>Follow </span>
            <span>Fb. / </span>
            <span>Tw. / </span>
            <span>ln. </span>
        </div>
        <div className=' flex items-center pt-8'>
        <DPIconLogo  className=''/>
        </div>
    
  
        <div className='w-1/3 flex flex-row justify-end gap-8 items-center'>
        <p className='text-base leading-amount text-lightBlack'>$259:00</p>
        <DPIconSearch />
        <DPIconLock/>
        </div>
        </div>
  )
}

export default NavBar;