import React from 'react'
import { useState } from 'react';

function Applicances() {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    <div 
      className="makeup-menu "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className='text-[13px] font-bold text-gray-500'>Appliaces</span>
      {isHovered && (
        <div className="menu-content">
          <div className="category-wrapper">
            <div className="category">
              <h3>Hair care Tools</h3>
              <ul>
                <li>Hair Dryers</li>
                <li>Straightnersr</li>
                <li>Curling iron Styler</li>
                <li>Multi Styler</li>
                
                
              </ul>
            </div>
            <div className="category bg-[rgb(244,244,244)] w-[100%]">
              <h3>Hair Remover Tools</h3>
              <ul>
                <li>Epilators</li>
                <li>Body Groomers</li>
                <li>Bikini trimers</li>
               
                
              </ul>
            </div>

            <div className="category ">
              <h3>Oral Care </h3>
              <ul>
                <li>Electric Tooth Brushesh</li>
                <li>Electric Flooshers</li>
                
                {/* ... other items */}
              </ul>
            </div>
            {/* Add more category divs as needed */}
          </div>
        </div>
      )}
    </div>

    
    </>
  );



  
  
}

export default Applicances