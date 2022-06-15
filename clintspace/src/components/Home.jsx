import React from 'react'
import IntroComponent from './Intro'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import OurStories from './outStroies'

function Home() {
  return (
    <>
      <Header />
      <IntroComponent />
      <OurStories />

      <Footer />
    </>

  )
}

export default Home