import React from 'react'
import IntroComponent from './Intro'
import Header from './layouts/Header'
import OurStories from './outStroies'
import Services from './services'

function Home() {
  return (
    <>
      <Header />
      <IntroComponent />
      <OurStories />
      <Services />
    </>

  )
}

export default Home