import React from 'react'
import  { useState } from 'react';

function MomAndBaby() {
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
      <span className='text-[13px] font-bold text-gray-500'>Moms & Baby</span>
      {isHovered && (
        <div className="menu-content right-0">
          <div className="category-wrapper">
            <div className="category">
              <h3>Hair Care</h3>
              <ul>
                <li>Shampoo</li>
                <li>Dry Shampoo</li>
                <li>Conditioner</li>
                <li>Hair Oil</li>
                <li>Hair Serum</li>
                <li>Hair Cream & Masks</li>
              </ul>
            </div>
            <div className="category bg-[rgb(244,244,244)] w-[100%]">
              <h3>Tools & Accessories</h3>
              <ul>
                <li>Hair Brushesh</li>
                <li>Hair Comb</li>
                <li>Hair Dryer</li>
                <li>hair Stylers</li>
                <li>Hair Extension</li>
              </ul>
            </div>

            <div className="category ">
              <h3>Hair Styling</h3>
              <ul>
                <li>Hair Colors</li>
                <li>Hair Sprays</li>
                <li>Gel And Waxes</li>
                <li>Soaps</li>
                {/* ... other items */}
              </ul>
              <br />

              <h3>Shop By Hair Types</h3>
              <ul>
                <li>Straight</li>
                <li>Curly</li>
                <li>Wavy</li>
              </ul>
              <br />

              <h3>Professional Brands</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                
              </ul>
              <br/>
              <br/>
            </div>
            {/* Add more category divs as needed */}
          </div>
        </div>
      )}
    </div>
  </>
  )
}

export default MomAndBaby