import React from 'react'
import styles from "../styles";
import { gradient } from "../assets";

const BottomCTA = () => {
  return (
    <div className={`${styles.sectionBox} pb-[64px] bg-white flex flex-col items-center px-[8px]`}>

        <div className={`${styles.contentBox} py-[120px] mx-[32px] w-full bg-blue flex flex-col items-center rounded-2xl relative z-10 overflow-hidden`}>
            <div className={`${styles.h2BoxFlat} z-10`}>

              <div className="flex flex-col items-center">
                <h2 className={`${styles.h2} text-center pt-[16px] text-white`}>Endless exports with complete customization.</h2>
                
                <div className="pb-[32px]">
                    <p className={`text-white text-center`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
                </div>
                <button className={`${styles.heroButtonWhite} text-blue`}>Download Daysheets</button>
              </div>

            </div>

            <img src={gradient} alt="Gradient background" className='absolute z-0 top-0 opacity-50 w-full h-full' />

        </div>

    </div>
  )
}

export default BottomCTA