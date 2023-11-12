import React from 'react'
import image1 from '../images/brandss.png';


function Brands() {
  return (
    <>
    <div className="mx-36 top-0 flex shadow-xl h-[400px]">
            <div className="flex flex-col h-full w-3/5 bg-white  rounded-br-sm ">
                <input 
                className='my-2 mx-auto rounded-sm border 1px solid gary text-center text-[15px] p-1 w-[250px]'
                placeholder='Search Brands'
                />
                <hr/>

                <div className='flex flex-col'>
                    <ul className='flex flex-col'> 
                        <span className='text-left text-[12px] my-[20px] ml-[15px] text-gray-500 font-bold'>TOP BBRANDS</span>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Clutch</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Lit From Within</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Entice</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Showgirl</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Joyeaux</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Genesis</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Loreum</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Lotus</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Lux</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Nivea</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Iconic</li>
                        <li className='ml-[15px] text-[12px] text-gray-500'>Bioqiots</li>
                    </ul>
                </div>


            </div>

          <div className="h-full bg-gray-200 w-full rounded-br-sm">
            <div className='bg-pink-500 w-[160px] p-1  text-white my-3 mx-auto'>Popular Brands</div>
            <div className='flex flex-wrap'>
                <img src={image1} alt=''/>

            


            </div>
          </div>
        </div>
    </>
  )
}

export default Brands