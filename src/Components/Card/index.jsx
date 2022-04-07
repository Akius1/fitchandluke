import React from 'react';
import {
DPIconCart,
DPIconLike
} from "../../assets/svg"

const ImageCard = ({item}) => {
  return (
    <div className='flex flex-col'>
        <img src={item?.image}/>
        <div className='flex flex-row justify-between items-center py-2'>
            <div className=''>
            <p className='text-lightBlack text-nameSize font-medium font-["Avenir"] leading-nameLine'>{item?.name}</p>
            <p className='text-faintGrey text-xl leading-amount font-normal'>{item?.amount}</p>
            </div>
            <div className=' flex flex-col gap-2 pr-2'>
                <DPIconCart />
                <DPIconLike />
            </div>
        </div>
       
    </div>
  )
}

export default ImageCard;