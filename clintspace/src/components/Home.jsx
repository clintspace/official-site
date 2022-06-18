import React from 'react'
import IntroComponent from './Intro'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import OurStories from './outStroies'
import Portofoilo from './portofoilo'
import Services from './services'

function Home() {
  return (
    <>
      <Header />
      <IntroComponent />
      <OurStories />
      <Services />
      <Portofoilo />
      {/* <Footer /> */}
    </>

  )
}

export default Home