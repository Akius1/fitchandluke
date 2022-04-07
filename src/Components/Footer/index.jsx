import React from "react";
import { DPIconSeerbit } from "../../assets/svg";

const Footer = () => {
  return (
    <div className="w-full py-16 bg-lightBlack flex items-center justify-between px-36 text-white text-base leading-amount">
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
        <a
          href="https://web.facebook.com/SeerBit"
          className="text-base leading-links capitalize hover:text-xl"
        >
          <span>Fb </span>
        </a>
        <span> / </span>
        <a
          href="https://www.linkedin.com/company/seerbit/"
          className="text-base  leading-links capitalize hover:text-xl"
        >
          <span>ln </span>
        </a>
        <span> / </span>
        <a
          href="https://twitter.com/getSeerBit"
          className="text-base leading-links capitalize hover:text-xl"
        >
          <span>Yt </span>
        </a>
        <span> / </span>
        <a
          href="https://twitter.com/getSeerBit"
          className="text-base leading-links capitalize hover:text-xl"
        >
          <span>Tw</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
