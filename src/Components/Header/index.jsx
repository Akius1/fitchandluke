import React from "react";
import { connect } from "react-redux";
import { DPIconLock, DPIconLogo, DPIconSearch } from "../../assets/svg";

const NavBar = ({cart}) => {
    const sum = cart?.cart?.reduce((accum, val)=>{
        return accum + val?.amount
    },0);
  return (
    <div className=" relative w-full  flex flex-row h-24 justify-between items-center py-2 px-24">
      <div className="w-1/3 ">
     
        <span className="text-base text-lightBlack font-black leading-links capitalize">Follow </span>
        <a href="https://web.facebook.com/SeerBit"
        className="text-base text-lightBlack font-black leading-links capitalize hover:text-xl">
              <span>Fb. / </span>
      </a>
      <a href="https://twitter.com/getSeerBit" className="text-base text-lightBlack font-black leading-links capitalize hover:text-xl">
      <span>Tw. / </span>
      </a>
      <a href="https://www.linkedin.com/company/seerbit/" className="text-base text-lightBlack font-black leading-links capitalize hover:text-xl">
      <span>ln. </span>
      </a>
       
      </div>
      <div className=" flex items-center pt-8 ">
        <DPIconLogo className="" />
      </div>

      <div className=" w-1/3 flex flex-row justify-end gap-8 items-center cursor-pointer">
        <p className="text-base leading-amount text-cartBlue">${sum}:00</p>
        <DPIconSearch />
        
            {
                cart?.cart?.length && <div className="absolute top-6 right-20 flex justify-center items-center w-5 h-5 rounded-full bg-lightBlack text-white"><span className="text-xs font-black">{cart?.cart?.length}</span></div>
            }
        <DPIconLock />
        
        
      </div>
    </div>
  );
};

export default connect((state) => ({
  cart: state?.cart_reducer,
}))(NavBar);
