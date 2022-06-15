import React from 'react'
import IntroComponent from './Intro'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import OurStories from './outStroies'
import Services from './services'

function Home() {
  return (
    <>
      <Header />
      <IntroComponent />
      <OurStories />

      <Footer />
      <Services />
    </>

  )
}

export default Home