import React from 'react'
import Banner from '../components/home-page/Banner'
import Navbar from '../components/Navbar'
import FeatureOne from '../components/home-page/FeatureOne'
import FeatureTwo from '../components/home-page/FeatureTwo'
import FeatureThree from '../components/home-page/FeatureThree'
import AboutUs from '../components/home-page/AboutUs'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar pageProp={'home-page'}/>
      <Banner />
      <h1 className='m-2 font-nunito fint-semi-bold text-center text-5xl'>Features</h1>
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <AboutUs />
      <Footer />
    </>
  )
}

export default HomePage