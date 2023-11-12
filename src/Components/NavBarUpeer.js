import React from "react";
import { TbDeviceMobile } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { HiGiftTop } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";
import "../Styles/NavbarUpper.css";

function NavBarUpeer() {
  return (
    <>
      <div className="h-[35px] bg-[rgb(255,144,185)] flex">
        <div className="text-wrap">
          <h1 className=" hover:text-white tracking-tighter text-Black-900 text-[15px] font-semibold">
            BEAUTY BONAZA Get your Daily Dose of Amazing Deals!
          </h1>
        </div>

        <div className="flex text-[15px] font-light space-x-5 ml-[200px] mt-[5px]">
          <div className="flex  hover:text-white">
            <TbDeviceMobile className="text-[25px]" />
            Get App
          </div>
          <div className="flex  hover:text-white">
            <CiLocationOn className="text-[25px]" />
            Stores & Events
          </div>
          <div className="flex  hover:text-white">
            <HiGiftTop className="text-[25px]" />
            Gift-Card
          </div>
          <div className="flex hover:text-white">
            <IoMdHelpCircleOutline className="text-[25px]" />
            Help
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarUpeer;
