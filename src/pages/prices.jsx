import React from 'react';
import { Navbar, Pricing, Footer} from "../components";

const prices = () => {
  return (
    <div>
        <div className='sticky top-0 z-20'><Navbar/></div>
        <Pricing />
        <Footer />
    </div>
  )
}

export default prices