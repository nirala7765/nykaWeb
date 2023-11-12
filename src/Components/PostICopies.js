import React, { useRef } from 'react';
import '../Styles/PostICopies.css';

function PostICopies() {
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 500; // You can adjust the scroll amount as needed

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      <div className='post-container-scroll flex my-5'>
        {/* Arrow icon for left navigation */}
        <svg onClick={() => handleScroll('left')} className='w-8 h-8 text-gray-600 cursor-pointer my-[156px]' fill='none' stroke='currentColor '
          viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
        </svg>

        {/* Post container with images */}
        <div className='post-container' ref={containerRef}>
          <div className='image-container'>
            {/* Repeat the image elements as needed */}
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/uploads/4a6dc82a-7f26-4b8b-871e-0f4894fb25b4.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/c8deda57-7b9f-41a7-ad98-696c64fb4e56/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/7acf0c3e-0a34-42a7-8760-a3ec382e0a71/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>

            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/d360438a-d3e7-4a76-a4e2-8c106b0fe973/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/uploads/e35039c1-f1bf-490d-b250-0cdfb991b0a3.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/ac92769f-d4f9-44fb-8541-d25d0fe81b5b/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/12f16fc3-b901-45cc-95a0-231e38005eda/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>

            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/7c0dae20-bb9e-4d1b-a96e-40a42e2a4a28/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            <div className='image'>
              <img
                src='https://images-static.nykaa.com/creatives/be73cc3b-1ef5-4ee0-a490-77e1afdc621f/default.jpg?tr=w-1200,cm-pad_resize'
                alt=''
              />
            </div>
            {/* Repeat the other image elements as needed */}
          </div>
        </div>

        {/* Arrow icon for right navigation */}
        <svg onClick={() => handleScroll('right')} className='w-8 h-8 text-gray-600 cursor-pointer my-[156px]' fill='none' stroke='currentColor'
          viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
        </svg>
      </div>
    </>
  );
}

export default PostICopies;
