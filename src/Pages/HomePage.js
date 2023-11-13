import React from 'react'
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';
import Footer from '../Components/Footer';
import FooterComponent from '../Components/FooterComponent';


function HomePage() {
  return (
    <div>
      <div className='sticky top-0 bg-white'>
      <Header  />

      </div>
        
        <MainContent/>
        <Footer/>
        <FooterComponent/>

    </div>
  )
}

export default HomePage;