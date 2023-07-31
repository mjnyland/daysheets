import React, {useRef, useEffect, useState} from 'react';
import styles from "../styles";
import { mockup, wave } from "../assets";
import { motion } from "framer-motion";
import { PopupButton } from "react-calendly";


const fadeUp = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      delay: 0.2,
      ease: 'easeOut'
    }
  },
};

const fadeUp2 = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      delay: 0.4,
      ease: 'easeOut'
    }
  },
};

const fadeUp3 = {
  hidden: { 
    opacity: 0,
    y: 20,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      delay: 0.6,
      ease: 'easeOut'
    }
  },
};

const Hero = () => {

  const [isHidden, setIsHidden] = useState(true);
  

  const toggleDisplay = () => {
    setIsHidden(!isHidden);
  };

  const daysheetsUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Replace this with the URL to your daysheets file

  return (

    <section id="root" className={`${styles.sectionBox} bg-white relative ${isHidden ? '' : 'overscroll-auto'}`}>
      
      <div className={`${styles.contentBox} flex flex-col items-center pt-[80px] px-4 overflow-hidden`}>

        <div className="flex flex-col items-center"> {/* Hero text content*/}

          <div className="max-w-[900px]">
            <motion.h1 
              className={`${styles.h1} text-darkBlue pb-[40px]`}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              >The modern solution for touring and <span className="text-blue">production management.</span></motion.h1>
          </div>

          <div className="max-w-[800px] pb-[40px]">
            <motion.p 
              className={`text-darkBlue text-center text-lg sm:text-2xl `}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              >Minimize time spent on organization, so you can enjoy your days off. Doesn’t that sound nice?
              </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[16px]">
            <motion.a 
              href={daysheetsUrl}
              className={`${styles.heroButton}`}
              variants={fadeUp2}
              initial="hidden"
              animate="visible"
              >Download Daysheets</motion.a>
            
              <motion.div 
              className={`App bg-blue text-black text-center ${styles.heroButtonBlack}`}
              variants={fadeUp2}
              initial="hidden"
              animate="visible"
              >
                <PopupButton
                  url="https://calendly.com/michael-csc/daysheets-demo"
                  /*
                  * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                  * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                  */
                  rootElement={document.getElementById("root")}
                  text="Book a Demo"
                />
              </motion.div>
          </div>

        </div>

        <div className={`${styles.h1} max-w-[1200px] pt-[80px] relative z-20`}>
          <motion.img 
            variants={fadeUp3}
            initial="hidden"
            animate="visible"
            src={mockup} alt="Daysheets UI Mobile and Desktop Mockup" className="" />
            
        </div>

      </div>

      <motion.img 
        variants={fadeUp3}
        initial="hidden"
        animate="visible"
        src={wave} alt="Soundwave illustration" className="absolute top-[660px] lg:top-[600px] w-full z-10" />

    </section>
  );
};

export default Hero;