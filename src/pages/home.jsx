import React from 'react';
import { Hero, Navbar, Features, Personalized, Exports, GuestList, BottomCTA, TravelProfile, Reviews, Flights, Footer, Mobile, Pricing } from "../components";

const Home = () => {
  return (
    <div>
        <div className='sticky top-0 z-20'><Navbar/></div>
        <Hero />
        <Features />
        <Flights />
        <Mobile />
        <Personalized />
        <div className='z-10'><Exports /> </div>
        <GuestList />
        <TravelProfile />
        <Reviews />
        <BottomCTA />
        <Footer />
    </div>
  )
}

export default Home