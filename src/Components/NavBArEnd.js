import React from "react";
import MakeupMenu from './MakeupMenu'
import SkinMenu from './SkinMenu'
import Applicances from './Applicances'
import HairMenu from './HairMenu'
import BathAndBody from './BathAndBody'
import Naturals from './Naturals'
import MomAndBaby from './MomAndBaby'
import Men from './Men'
import Fragnance from './Fragnance'
import PopUps from './PopUps'

function NavBArEnd() {
  return (
    <>
      <div className=" flex border-y-2 space-x-4 py-2 justify-center items-center ">
        <div className="flex space-x-2">
        <MakeupMenu />
        <SkinMenu />
        <HairMenu />
        <Applicances />
        <BathAndBody />
        <Naturals />
        <MomAndBaby />
        <Men />
        <Fragnance />
        <PopUps />

        </div>
        
      </div>
    </>
  );
}

export default NavBArEnd;
