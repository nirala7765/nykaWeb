// SuperDeals.jsx

import React, { useRef } from 'react';
import '../Styles/SuperDeals.css';

function SuperDeals() {
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
      <div className='bg-[rgb(241,250,254)] h-[300px]'>
        <div className='mx-11'>
          <img
            className=''
            src='https://images-static.nykaa.com/uploads/488ad983-ab21-48b3-ba7e-04b1644e8939.gif?tr=w-2400,cm-pad_resize'
            alt=''
          />
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

          {/* Post container with images */}
          <div className='Super-post-container' ref={containerRef}>
            <div className='Super-image-container'>
              {/* Repeat the image elements as needed */}
              <div className='Super-image'>
                <img
                  className=' object-cover rounded-md'
                  src='https://images-static.nykaa.com/uploads/3bf7ae81-e14d-40b9-9a5a-a35dd35437a8.gif?tr=w-600,cm-pad_resize'
                  alt=''
                />
              </div>
              <div className='Super-image'>
                <img
                  className=' object-cover rounded-md'
                  src='https://images-static.nykaa.com/uploads/3ddaf7dd-27f5-426f-830f-2586c46fc7b3.gif?tr=w-600,cm-pad_resize'
                  alt=''
                />
              </div>
              <div className='Super-image'>
                <img
                  className=' object-cover rounded-md'
                  src='https://images-static.nykaa.com/uploads/314fc589-eb0f-4d5d-9ae3-4c9790a2bd52.gif?tr=w-600,cm-pad_resize'
                  alt=''
                />
              </div>
              <div className='Super-image'>
                <img
                  className=' object-cover rounded-md'
                  src='https://images-static.nykaa.com/uploads/ff6386c8-ea58-49d3-a19c-1a587b10e339.jpg?tr=w-600,cm-pad_resize'
                  alt=''
                />
              </div>
              <div className='Super-image'>
                <img
                  className=' object-cover rounded-md'
                  src='https://images-static.nykaa.com/uploads/3b007669-1e83-46db-b7cc-702ae08055d9.jpg?tr=w-600,cm-pad_resize'
                  alt=''
                />
              </div>
              <div className='Super-image'>
                <img
                  className='object-cover rounded-md'
                  src='https://images-static.nykaa.com/uploads/3b007669-1e83-46db-b7cc-702ae08055d9.jpg?tr=w-600,cm-pad_resize'
                  alt=''
                />
              </div>
              {/* Repeat the other image elements as needed */}
            </div>
          </div>

          {/* Arrow icon for right navigation */}
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

export default SuperDeals;
