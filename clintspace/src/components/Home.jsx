import React, { useEffect, useState } from 'react'
import Clients from './clients'
import IntroComponent from './Intro'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import OurStories from './outStroies'
import Portofoilo from './portofoilo'
import Reports from './Reports'
import Services from './services'
import TeamMembers from './Team'
import Testmonials from './Testimonials'

function Home() {

  const [showMenu, setShowMenu] = useState();

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window;
      width <= 500 && setShowMenu(false);
      width > 500 && setShowMenu(true);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <IntroComponent />
      <OurStories />
      <Services />
      <Portofoilo />
      <TeamMembers smallScreen={showMenu} />
      <Clients smallScreen={showMenu} />
      <Testmonials />
      <Reports />
      <Footer />

    </>

  )
}

export default Home