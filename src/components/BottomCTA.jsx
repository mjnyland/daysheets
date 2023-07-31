import React from 'react'
import styles from "../styles";
import { gradient } from "../assets";
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

const daysheetsUrl = 'https://www.daysheets.com'; // Replace this with the URL to your daysheets file

const BottomCTA = () => {
  return (
    <div className={`${styles.sectionBox} pb-[64px] bg-white flex flex-col items-center px-[8px]`}>

        <div className={`${styles.contentBox} py-[120px] mx-[32px] w-full bg-blue flex flex-col items-center rounded-2xl relative z-10 overflow-hidden`}>
            <div className={`${styles.h2BoxFlat} z-10`}>

              <div className="flex flex-col items-center">
                <h2 className={`${styles.h2} text-center pt-[16px] text-white pb-[64px]`}>Schedule a demo with a Daysheets TM.</h2>
                
                {/*<div className="pb-[32px]">
                    <p className={`text-white text-center`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
                </div>*/}
                
                <div className="flex flex-col lg:flex-row gap-[16px]">
            
              <motion.div 
              className={`App bg-blue text-black text-center ${styles.heroButtonWhite}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 1}}
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

            </div>

            <img src={gradient} alt="Gradient background" className='absolute z-0 top-0 opacity-50 w-full h-full' />

        </div>

    </div>
  )
}

export default BottomCTA