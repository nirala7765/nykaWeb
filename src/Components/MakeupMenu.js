import React, { useState } from 'react';
import '../Styles/MakeupMenu.css';

const MakeupMenu = () => {
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
      <span className='text-[13px] font-bold text-gray-500'>Makeup</span>
      {isHovered && (
        <div className="menu-content">
          <div className="category-wrapper">
            <div className="category">
              <h3>Face</h3>
              <ul>
                <li>Face Primer</li>
                <li>Concealer</li>
                <li>Foundation</li>
                <li>Blush</li>
                <li>Brounzer</li>
                <li>Sindoor</li>
                
              </ul>
            </div>
            <div className="category bg-[rgb(244,244,244)] w-[100%]">
              <h3>Eyes</h3>
              <ul>
                <li>Kajal</li>
                <li>Eyeliner</li>
                <li>Mascara</li>
                <li>Eye-Primer</li>
                <li>Eye MakeUp Remover</li>
                <li>Contact Lenses</li>
                
              </ul>
            </div>

            <div className="category ">
              <h3>Lips</h3>
              <ul>
                <li>Lipistic</li>
                <li>Liquid Lipistic</li>
                <li>Lip liner</li>
                <li>Lip Tint</li>
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
};

export default MakeupMenu;
