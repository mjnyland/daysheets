import React from 'react'
import styles from "../styles";
import { checkmark, phoneBubbles } from "../assets";

const GuestList = () => {
  return (
    <div className={`${styles.sectionBox} bg-white px-[8px]`}>

        <div className={`${styles.contentBox}`}>

            {/* Heading */}
            <div className={`${styles.h2Box} pb-[80px]`}>
                <div  class="bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Guest Lists</h5></div>
                <h2 className={`${styles.h2} text-center text-darkBlue pt-[16px]`}>Guest list <span className="text-blue">galore</span>.</h2>
                
            </div>

            {/* Grid */}
            <div className='flex flex-col items-start lg:grid lg:grid-cols-3 lg:gap-[32px]  overflow-hidden'>

                
                    <div className='pt-[40px]'>
                        {/* Text Box */}
                        <div className={`text-darkBlue lg:col-span-1 pb-[32px]`}>
                            <h5 className={`${styles.h5}`}>Complete control on the go.</h5>
                            <p class={`${styles.body}`}>Whether you’re on the bus, or in production office maintain your guest list, and send it when you’re ready. </p>
                            <ul className="hidden">
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
                                        
                                        
                                        
                        {/* Text Box */}
                        <div className={`text-darkBlue lg:col-span-1`}>
                        <h5 className={`${styles.h5}`}>Submissions in one place.</h5>
                        <p class={`${styles.body}`}>Set who can make requests through Daysheets. Our sleek design makes it simple for all team members.</p>
                        <ul className="hidden">
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
                    </div>







                {/* Image Box */}
                <div class="px-6 lg:px-0 col-span-2 rounded-xl h-full">

                    <img src={phoneBubbles} alt="Product screenshot" class=""/>

                    
                </div>

            </div> 

        </div>


    </div>

  )
}

export default GuestList