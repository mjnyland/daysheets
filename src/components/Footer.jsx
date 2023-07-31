import React from 'react'
import styles from "../styles";
import { logotype } from "../assets";

const Footer = () => {
  return (
    <div className={`${styles.sectionBoxSmall} bg-gray`}>
        <div className={`${styles.contentBox} px-4`}>
            <div className='flex flex-col items-center gap-[32px]'>
                <img src={logotype} alt="Daysheets Logotype" className="Daysheets Logotype"/>
                <ul className='flex flex-row text-darkBlue gap-[16px]'>
                    <li>Help</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>

                <div className={`h-[1px] w-full bg-darkBlue`}></div>
                <p className={`${styles.body} text-darkBlue`}>© 2021 Daysheets. All rights reserved</p>
            </div>

        </div>
    </div>
  )
}

export default Footer