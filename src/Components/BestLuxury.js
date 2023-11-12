import React from "react";
import PhotoCrausal from "./PhotoCrausal";

function BestLuxury() {
  const photos = [
    {
      url: "https://images-static.nykaa.com/uploads/a22fe00b-9b92-497c-a738-800e1401fb26.jpg?tr=w-2400,cm-pad_resize",
    },
    {
      url: "https://images-static.nykaa.com/uploads/e447df93-6cf1-4530-b06d-2ef2ce1233db.jpg?tr=w-2400,cm-pad_resize",
    },
    {
      url: "https://images-static.nykaa.com/uploads/7505743c-b71c-4542-87f3-7aae764dae1a.jpg?tr=w-2400,cm-pad_resize",
    },
  ];
  return (
    <>
      <div className="bg-[rgb(243,244,246)]  ">
        <div className="text mt-[20px]">
            <br/>
          <p className="text-left text-[20px] font-extrabold mx-[60px]">
            The Best Of Luxury
          </p>
          <p className="text-left text-gray-500 mx-[60px]">
            Created by Us,Inspired by You
          </p>
        </div>
        <div className="slick ">
          <PhotoCrausal photo={photos} />
        </div>

       

        <div className="mt-[110px] mx-auto w-[90%] gap-5 flex">
            <img className="w-[170px] h-[80px]"
            src="https://images-static.nykaa.com/uploads/600c2404-d62e-4ebc-b559-462a3de9f9b3.jpg?tr=w-400,cm-pad_resize"
            alt=""
            />
            <img className="w-[170px] h-[80px]"
            src="https://images-static.nykaa.com/uploads/a2ec4705-04fe-4730-906b-15d793818bb4.jpg?tr=w-400,cm-pad_resize"
            alt=""
            />
            <img className="w-[170px] h-[80px]"
            src="https://images-static.nykaa.com/uploads/b7b0c5e2-4070-4ddc-91c2-2f6cd6dd28f6.jpg?tr=w-400,cm-pad_resize"
            alt=""
            />
            <img className="w-[170px] h-[80px]"
            src="https://images-static.nykaa.com/uploads/0c0f9c0b-07ae-4eb5-9411-3f65a7ae109f.jpg?tr=w-400,cm-pad_resize"
            alt=""
            />
            <img className="w-[170px] h-[80px]"
            src="https://images-static.nykaa.com/uploads/ed831f01-0998-46bb-9991-ce32e9c5e3c5.jpg?tr=w-400,cm-pad_resize"
            alt=""
            />
            <img className="w-[170px] h-[80px]"
            src="https://images-static.nykaa.com/uploads/c8d83d13-3ceb-4332-8ded-521139d3837e.jpg?tr=w-400,cm-pad_resize"
            alt=""
            />

        </div>
        <br/>
      </div>
    </>
  );
}

export default BestLuxury;
