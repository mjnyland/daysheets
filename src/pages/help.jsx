import React from 'react';
import { HelpContent, Navbar, Footer } from "../components";
import styles from "../styles";

const Help = () => {
  return (
    <div>
        <div className='sticky top-0 z-20'><Navbar/></div>
        <HelpContent />
        <Footer />
    </div>
  )
}

export default Help