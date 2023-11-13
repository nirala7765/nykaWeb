import React from 'react'
import {AiFillInstagram ,AiFillTwitterCircle} from 'react-icons/ai'
import {SiFacebook, SiYoutubemusic} from 'react-icons/si'
import {BsPinterest} from 'react-icons/bs'

function FooterPartIII() {
  return (
    <>
    <div>
        <div className='w-[90%] flex justify-between mx-auto text-[12px] font-semibold py-[70px]'>
            <div className='flex '>
                <div>
                    <img 
                    src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg'
                    alt=''/>

                </div>
                <div className='mx-[10px]'>
                    <h1>FREE SHIPING</h1>
                    <hr className='w-[90%] mx-auto'/>
                    <p>on Order Above<br/>₹299 </p>
                </div>
            </div>

            <div className='flex'>
                <div className='mx-[10px]'>
                    <img
                    src='https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg'
                    alt=''/>
                </div>
                <div>
                    <h1>EASY RETURNS</h1>
                    <hr className='w-[90%] mx-auto'/>
                    <p>15-Day Return Policy</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mx-[10px]'>
                    <img
                    src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg'
                    alt=''/>
                </div>
                <div>
                    <h1>100% AUTHENTIC</h1>
                    <hr className='w-[90%] mx-auto'/>
                    <p>Products Sourced Directly</p>
                </div>
            </div>
            <div className='flex'>
                <div className='mx-[10px]'>
                    <img
                    src='https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg'
                    alt=''/>
                </div>
                <div>
                    <h1>1900+ BRANDS</h1>
                    <hr className='w-[90%] mx-auto'/>
                    <p>1.2 Lakh+ Products </p>
                </div>
            </div>

            <div>
                <div>Show us some love ❤ on social <br/> media</div>
                <div className='flex ml-[50px] text-[15px] space-x-1'>
                    <AiFillInstagram/>
                    <SiFacebook/>
                    <SiYoutubemusic/>
                    <AiFillTwitterCircle/>
                    <BsPinterest/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FooterPartIII