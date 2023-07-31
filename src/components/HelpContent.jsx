import React from 'react'
import styles from "../styles";

const HelpContent = () => {
  return (
    <div class={`${styles.sectionBox} bg-white grow`}>

    <div class={`${styles.contentBox} my-auto`}>

        <div className='grid grid-cols-3 gap-[64px]'>
            <div className='col-span-1'>
                <h2 className={`${styles.h2} text-darkBlue`}>FAQ</h2>
                <p className={`${styles.body} text-darkBlue`}>Can't find what you're looking for? Our support team is here to answer any questions.</p>
            </div>

            <div className='col-span-2 flex flex-col gap-[32px]'>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 1?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 2?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 3?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 4?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 5?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 6?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 7?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div>
                    <h5 className={`${styles.h5} text-darkBlue`}>Question 8?</h5>
                    <p className={`${styles.body} text-darkBlue`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

            </div>
        </div>



    </div>

</div>
  )
}

export default HelpContent