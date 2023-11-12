import React, { useState } from "react";
import logo from "../images/Ar-logo.jpg";
import Brands from "./Brands";
import Lukes from "./Lukes";
import Nykaa from "./Nykaa";
import Beauty from "./Beauty";
import {BsHandbag} from 'react-icons/bs'

function NavBarMiddle() {
  const [isBrandHovered, setIsBrandHovered] = useState("hidden");
  const [isLukesHovered, setIsLukesHovered] = useState("hidden");
  const [isNykaaHovered, setIsNykaaHovered] = useState("hidden");
  const [isbeautyHovered, setIsBeautyHovered] = useState("hidden");


  const handleMouseEnter = (e) => {
    
    if(e.target.id==="brand"){
      
      setIsBrandHovered("block")

    }
    if(e.target.id==="lukes"){
      setIsLukesHovered("block")
    }
    if(e.target.id==="nykaa"){
      setIsNykaaHovered("block")
    }
    if(e.target.id==="beauty"){
      setIsBeautyHovered("block")
    }
    
    
  };

  const handleMouseLeave = (e) => {
    
    if(e.target.id==="brand"){
      
      setIsBrandHovered("hidden")

    }
    if(e.target.id==="lukes"){
      setIsLukesHovered("hidden")
    }
    if(e.target.id==="nykaa"){
      setIsNykaaHovered("hidden")
    }
    if(e.target.id==="beauty"){
      setIsBeautyHovered("hidden")
    }

   
   
  };
  // const [hidden,setHidden] = useState("hidden");
  return (
    <>
     

      <div className=" flex w-full   justify-around">
        <div className="flex ">
          <div>
            <img
              className="mt-[10px] ml-[50px] w-[150px] h-[40px]"
              src={logo}
              alt=""
            />
          </div>

          <div >
            <ul className="flex text-black">
              <li className=" text-black font-bold my-3 p-1">category</li>
              <li
                className={`text-black font-bold my-3 p-1 h`}
                id="brand"
                onMouseEnter={(e)=>{handleMouseEnter(e)}}
                onMouseLeave={(e)=>{handleMouseLeave(e)}}
              >
                Brands
              </li>
              <li className=" text-black font-bold my-3 p-1"
              id={"lukes"}
              onMouseEnter={(e)=>{handleMouseEnter(e)}}
                onMouseLeave={(e)=>{handleMouseLeave(e)}}
              
              >Lukes</li>

              <li className=" text-black font-bold my-3 p-1"
              id={"nykaa"}
              onMouseEnter={(e)=>{handleMouseEnter(e)}}
                onMouseLeave={(e)=>{handleMouseLeave(e)}}
              >Nykaa Fashion</li>
              <li className=" text-black font-bold my-3 p-1"
              id={"beauty"}
              onMouseEnter={(e)=>{handleMouseEnter(e)}}
                onMouseLeave={(e)=>{handleMouseLeave(e)}}
              >Beauty Advice</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div>
            <input
              className="border-2 bg-gray-100 my-3 rounded  h-[30px]"
              type="text"
              placeholder="Search Products"
            />
          </div>
          <div className=" w-[60px] h-[30px] rounded-[5px] bg-pink-500 text-white my-3">Signup</div>
          <div className="my-4 ml-5 text-[20px]">
            <BsHandbag/>
          </div>
        </div>
      </div>
     
      <div className={`absolute  z-10 top-15 w-full ${isBrandHovered}`}>
      <Brands/>
      </div>
      <div className={`absolute  z-10 top-15 w-full ${isLukesHovered}`}>
        <Lukes/>
      </div>
      <div className={`absolute  z-10 top-15 w-full ${isNykaaHovered}`}>
       <Nykaa/>
      </div>
      <div className={`absolute  z-10 top-15 w-full ${isbeautyHovered}`}>
        <Beauty/>
      </div>
    </>
  );
}

export default NavBarMiddle;
