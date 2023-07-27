import React, {useRef, useEffect, useState} from 'react'
import styles from "../styles";
import { checkmark, routing, dragAndDrop, shortcuts } from "../assets";

import { useInView } from 'react-intersection-observer';

const Features = () => {

const [ ref1, inView1 ] = useInView();
const [ ref2, inView2 ] = useInView();
const [ ref3, inView3 ] = useInView();
const [ ref4, inView4 ] = useInView();



  return (
    <section className={`${styles.sectionBox} bg-gradient-to-t from-lightWhite to-white`}>
        
        <div className={`${styles.contentBox} px-4 `}>

            <div className={`${styles.h2Box} my-[32px]`}>
                <h2 className={` ${styles.h2} ${inView1 ? styles.fadeUp1 : styles.hidden} pb-[32px] text-center pt-[32px] `} ref={ref1}>Experience data entry in <span className="text-blue">minutes</span>, not hours.</h2>
                <div>
                    <p className={`text-darkBlue ${styles.h2Body} ${inView1 ? styles.fadeUp2 : styles.hidden}`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
                </div>
            </div>
            
            <div className={`${styles.twoColBox}`}> {/* Feature 1 */}

                <div className={`${inView2 ? styles.fadeRight1 : styles.hidden} text-darkBlue`} ref={ref2}> {/* Text Box */}
                    <h6 className={`${styles.tag}`}>Fast tour creation</h6>
                    <h3 className={`${styles.h3}`}>Tab through your routing, we’ll check the drives.</h3>
                    <p class={`${styles.body}`}>Build your entire tour routing without using the mouse, and let us calculate your distances between cities.</p>
                    <ul>
                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} `}>Google maps integration.</li>
                        </div>
                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} `}>Up to date venue name changes.</li>
                        </div>

                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Instant drive times, and flagged overdrives.</li>
                        </div>
                    </ul>
                </div>
                
                
                <div className='pt-[32px] lg:pt-0  rounded-xl'> {/* Image Box */}
                    <img src={ routing } alt="" className='shadow-lg rounded-lg'/>
                </div>
            </div>

            <div className={`${styles.twoColBox}`}> {/* Feature 2 */}

                <div className='pt-[32px] lg:pt-0'> {/* Image Box */}
                    <img src={ dragAndDrop } alt="" class=" rounded-xl max-h-[300px]"/>
                </div>

                <div className={`text-darkBlue order-first lg:order-last ${inView3 ? styles.fadeLeft1 : styles.hidden}`} ref={ref3}> {/* Text Box */}
                    <h6 className={`${styles.tag}`}>Fast tour creation</h6>
                    <h3 className={`${styles.h3}`}>Effortlessly import your personnel, in record time.</h3>
                    <p class={`${styles.body}`}>Build your entire tour routing without using the mouse, and let us calculate your distances between cities.</p>
                    <ul>
                        <div class="flex flex-row ">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Google maps integration.</li>
                        </div>
                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Up to date venue name changes.</li>
                        </div>

                        <div class="flex flex-row ">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Instant drive times, and flagged overdrives.</li>
                        </div>
                    </ul>
                </div>
                
                
            </div>

            <div className={`${styles.twoColBox} pb-0`}> {/* Feature 3 */}

                <div className={`text-darkBlue ${inView4 ? styles.fadeRight1 : styles.hidden}`} ref={ref4}> {/* Text Box */}
                    <h6 className={`${styles.tag}`}>Fast tour creation</h6>
                    <h3 className={`${styles.h3}`}>Designed around tabbing, and shortcuts.</h3>
                    <p class={`${styles.body}`}>Build your entire tour routing without using the mouse, and let us calculate your distances between cities.</p>
                    <ul>
                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Google maps integration.</li>
                        </div>
                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Up to date venue name changes.</li>
                        </div>

                        <div class="flex flex-row">
                            <img src={ checkmark } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body}`}>Instant drive times, and flagged overdrives.</li>
                        </div>
                    </ul>
                </div>
                
                
                <div className='pt-[32px] lg:pt-0 rounded-xl'> {/* Image Box */}
                    <img src={ shortcuts } alt="" />
                </div>
            </div>                        

            
        </div>

    </section>
  )
}

export default Features