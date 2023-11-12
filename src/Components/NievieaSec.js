import React from "react";
import { useRef } from "react";

function NievieaSec() {

    const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 500;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };
    
  return (
  <>
  <div className="Nivea-container bg-[rgb(255,249,241)] ">

    <div className="w-[full] cursor-pointer relative mx-auto  ">
        <div className="absolute mt-[65px] ">
            <h1 className="text-[20px] font-bold inset-0 ml-5">Up to 50% Off</h1>
            <p className="inset-0">On Bestsellers</p>
        </div>
        <img className="w-[full] h-[120px]"
        src="https://images-static.nykaa.com/uploads/a4b66193-33a3-4702-8aa1-5babcf5c487e.jpg?tr=w-2400,cm-pad_resize"
        alt=""/>

    </div>


    <div className='Super-post-container-scroll flex my-5'>
          {/* Arrow icon for left navigation */}
          <svg
            onClick={() => handleScroll('left')}
            className='w-8 h-8 text-gray-600 cursor-pointer my-[60px]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
          </svg>

          <div className="bg-[rgb(255,249,241)] flex gap-3 w-[95%] mx-auto overflow-x-auto  ">
            <div className="w-[150px] h-[290px] py-[20px]  relative ">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/0/8/08a51c9NIVEA00000164ab_0.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                NIVEA Fresh Blends Raspberry Body Wash
                </h1>
                <h1 className="text-gray-500">300ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹399</h1>
                  <h1 className="text-gray-500">
                    <del>₹499</del>
                  </h1>
                  <h1 className="text-green-600">40%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/9/9/99747404005808679829_1.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                NIVEA SOFT Light cream-Vit E & Jojoba oil for Non-
                </h1>
                <h1 className="text-gray-500">300ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹330</h1>
                  <h1 className="text-gray-500">
                    <del>₹499</del>
                  </h1>
                  <h1 className="text-green-600">40%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative ">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/9/0/90f684c8904256000109_02.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                  NIVEA Vit E Body Milk Lotion - 5 In 1...
                </h1>
                <h1 className="text-gray-500">600ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹375</h1>
                  <h1 className="text-gray-500">
                    <del>₹675</del>
                  </h1>
                  <h1 className="text-green-600">40%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/a/5/a591d474005900012821ab_0.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                    NIVEA Deo Roll-on- Pearl extracts & 0% Alcohol, for
                </h1>
                <h1 className="text-gray-500">50ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹174</h1>
                  <h1 className="text-gray-500">
                    <del>₹275</del>
                  </h1>
                  <h1 className="text-green-600">30%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative ">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/0/8/08a51c9NIVEA00000164ab_0.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                NIVEA Fresh Blends Raspberry Body Wash
                </h1>
                <h1 className="text-gray-500">300ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹399</h1>
                  <h1 className="text-gray-500">
                    <del>₹499</del>
                  </h1>
                  <h1 className="text-green-600">40%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/9/9/99747404005808679829_1.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                NIVEA SOFT Light cream-Vit E & Jojoba oil for Non-
                </h1>
                <h1 className="text-gray-500">300ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹330</h1>
                  <h1 className="text-gray-500">
                    <del>₹499</del>
                  </h1>
                  <h1 className="text-green-600">40%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative ">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/9/0/90f684c8904256000109_02.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                  NIVEA Vit E Body Milk Lotion - 5 In 1...
                </h1>
                <h1 className="text-gray-500">600ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹375</h1>
                  <h1 className="text-gray-500">
                    <del>₹675</del>
                  </h1>
                  <h1 className="text-green-600">40%</h1>
                </div>
              </div>
            </div>
            <div className="w-[150px] h-[290px] py-[20px]  relative">
              <div className="bg-white w-[150px] h-[200px] rounded-md  shadow-md">
                <h1 className="text-left text-gray-400 text-[12px] text-bold">
                  OFFER
                </h1>
                <img
                  className=""
                  src="https://images-static.nykaa.com/media/catalog/product/a/5/a591d474005900012821ab_0.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                />
                <div className="flex mx-4 my-2">
                  <h1 className="text-gray-600 text-[12px]">4.5★ </h1>
                  <h1 className="text-gray-400 text-[12px]">/5</h1>
                  <h1 className="text-gray-400 text-[12px]">(33k)</h1>
                </div>
              </div>

              <div className="text-left">
                <h1 className="w-[full] text-gray-600 truncate text-[13px] font-bold ">
                    NIVEA Deo Roll-on- Pearl extracts & 0% Alcohol, for
                </h1>
                <h1 className="text-gray-500">50ml</h1>
                <div className="flex gap-1 text-[15px]">
                  <h1 className="Rate">₹174</h1>
                  <h1 className="text-gray-500">
                    <del>₹275</del>
                  </h1>
                  <h1 className="text-green-600">30%</h1>
                </div>
              </div>
            </div>
          </div>


     <svg
            onClick={() => handleScroll('right')}
            className='w-8 h-8 text-gray-600 cursor-pointer my-[60px]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
          </svg>
        </div>

  </div>
  </>
  );
}

export default NievieaSec;
