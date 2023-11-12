import React from "react";

function Beauty() {
  return (
    <>
      <div className="mx-36 flex bg-white ">
        
          <div className="h-full w-3/5 bg-white my-[35px] mx-auto hover:text-pink-500">
            <img className="w[200px] h-[150px] rounded-sm"
              src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg"
              alt=""
            />
            <h1  className="text-[13px] font-bold">BEAUTY BOOK</h1>
            <h1 className="text-[12px] text-gray-600 font-normal">Nykaa's Digital Magazine</h1>
          </div>
        
        <div className="h-full w-3/5 bg-white my-[35px] mx-auto hover:text-pink-500">
          <img className="w[200px] h-[150px] rounded-sm"
            src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png"
            alt=""
          />
          <h1 className="text-[13px] font-bold">NYKAA TV</h1>
          <h1 className="text-[12px] text-gray-600 font-normal">Masterclasses By Experts & Vloggers</h1>
        </div>

        <div  className="h-full w-3/5 bg-white my-[35px] mx-auto hover:text-pink-500">
          <img className="w[200px] h-[150px] rounded-sm"
            src="https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg"
            alt=""
          />
          <h1 className="text-[13px] font-bold">BEAUTY BUYING GUIDES</h1>
          <h1 className="text-[12px] text-gray-600 font-normal">Tips To Explore While You Shop</h1>
        </div>
      </div>
    </>
  );
}

export default Beauty;
