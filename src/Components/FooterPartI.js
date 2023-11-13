import React from "react";
import { MdEmail } from "react-icons/md";
import {AiOutlineMobile} from 'react-icons/ai'
import Appstorelogo from '../images/Appstore.png'
import {IoCallSharp} from 'react-icons/io5'

function FooterPartI() {
  return (
    <>
      <div className="bg-[rgb(58,64,70)] text-white   ">

        <div className="flex w-[90%] mx-auto justify-between py-[10px] ">
        <div className=" ">
          <div className="text-left flex gap-2  text-[15px] pt-[15px]">
            <MdEmail className="text-[25px] " />
            Get special discount on your inbox
          </div>
          <div className="flex  gap-4">
            <input
              className="border-t-0 border-l-0 border-r-0 border-b-2 bg-[rgb(58,64,70)] text-white"
              type="email"
              placeholder="your Email"
            />

            <button className="border-2 py-1 px-[8px] rounded-md text-[10px]">
              SEND
            </button>
          </div>
        </div>


        <div>
          <div className="flex gap-2  text-[15px] pt-[15px]">
            <AiOutlineMobile className="text-[25px] "/> EXPERIENCE THE NYKAA MOBILE APP
          </div>

          <div className="flex">
            <img className="w-[150px]"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt=""/>
            <img
            className="w-[150px]"
            src={Appstorelogo}
            alt=""/>
          </div>

        </div>


        <div className="text-[13px]">
          <div className="flex pt-[20px] gap-2"> 
            <IoCallSharp className="text-[25px]"/>FOR ANY HELP, YOU MAY CALL US AT
          </div>
          <div>
            <p className="text-left ml-[30px]">1800-267-4444</p>
            <p className="text-left ml-[30px]">(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p>
          </div>
        </div>


        </div>


        

      </div>
    </>
  );
}

export default FooterPartI;
