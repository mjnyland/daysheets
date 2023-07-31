import React from 'react';
import { Hero, Navbar, Features, Personalized, Exports, GuestList, BottomCTA, TravelProfile, Flights, Footer, Mobile } from "../components";


const Home = () => {
  return (


    <div className='relative'>
        {/*<Popup />*/}
        <div className='sticky top-0 z-30'><Navbar/></div>
        <Hero />
        <Features />
        <Flights />
        <Mobile />
        <Personalized />
        <Exports />
        <GuestList />
        <TravelProfile />
        <BottomCTA />
        <Footer />
    </div>
  )
}

export default Home