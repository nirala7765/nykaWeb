import React from "react";
import NavBarUpeer from "./NavBarUpeer";
import NavBarMiddle from "./NavBarMiddle";
import NavBArEnd from "./NavBArEnd";


function Header() {
  return (
    <>
      <div>
        <NavBarUpeer />
      </div>

     <div>
      <NavBarMiddle/>
     </div>
    

      <div>
      <NavBArEnd/>
        
      </div>

    </>
  );
}

export default Header;
