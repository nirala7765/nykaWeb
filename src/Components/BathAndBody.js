import React from "react";
import { useState } from "react";

function BathAndBody() {
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
        <span className='text-[13px] font-bold text-gray-500'>Bath & Body</span>
        {isHovered && (
          <div className="menu-content">
            <div className="category-wrapper">
              <div className="category">
                <h3>Moisturizers</h3>
                <ul>
                  <li>Face Moisturizer & Day Cream</li>
                  <li>Night Cream</li>
                  <li>Face Oils</li>
                  <li>Serums & Essence</li>
                  <li>All Purpose Gels/Creams</li>
                  <li>Sindoor</li>
                </ul>

                <br />

                <h3>Cleansers</h3>
                <ul>
                  <li>Face Wash</li>
                  <li>Micellar Water</li>
                  <li>Face Wipess</li>
                  <li>Scrubs & Exfoliators</li>
                </ul>
              </div>
              <div className="category bg-[rgb(244,244,244)] w-[100%]">
                <h3>Trending Searches</h3>
                <ul>
                  <li>Toners Under 1000</li>
                  <li>Face Wash For Oily Skin</li>
                  <li>Oil Free Face Moisturizers</li>
                  <li>Lip Balm Under 500</li>
                  <li>Vitamin C Serum</li>
                </ul>
                <br />

                <h3>Masks</h3>
                <ul>
                  <li>Sheet Masks</li>
                  <li>Sleeping Masks</li>
                  <li>MAsks and peels</li>
                  <li>Face Pack</li>
                  <li>Peels of Masks</li>
                </ul>
              </div>

              <div className="category ">
                <h3>Body Care</h3>
                <ul>
                  <li>Masaage Oil</li>
                  <li>Body Butter</li>
                  <li>Shower Gel and Body Wash</li>
                  <li>Soaps</li>
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

export default BathAndBody;
