import React from 'react'
import styles from "../styles";
import { checkmark, checkmark_white, notes, hotels } from "../assets";

const Personalized = () => {
  return (
    <section className={`${styles.sectionBox} bg-darkBlue overflow-hidden`}>
        
        <div className={`${styles.contentBox} px-4 pb-[64px] relative`}>

            {/* Heading */}
            <div className={`${styles.h2Box} pb-[80px]`}>
                <div  class="bg-dimWhite text-white px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Coming soon</h5></div>
                <h2 className={`${styles.h2} text-center text-white pt-[32px]`}>A personalized experience, <span className='text-blue'>for everyone</span> on your tour.</h2>
                <div>
                    <p className={`text-white ${styles.h2Body}`}>Manage your entire team from one place, even if they’re split across different cities.  Your experience is the command center, their’s is only they need.</p>
                </div>
            </div>
            
            <div className={`${styles.twoColBox}`}> {/* Feature 1 */}

                <div className={`text-white col-span-1`}> {/* Text Box */}
                    <h6 className={`${styles.tag}`}>Fast tour creation</h6>
                    <h3 className={`${styles.h3}`}>Notes for groups, individuals, and you.</h3>
                    <p class={`${styles.body} text-white`}>Create as many note as needed , and specify who see’s them.  Team members also have their own daily note section where they can keep the dirt.</p>
                    <ul>
                        <div class="flex flex-row pb-2">
                            <img src={ checkmark_white } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} text-white`}>Unlimited sections of notes. </li>
                        </div>
                        <div class="flex flex-row pb-2">
                            <img src={ checkmark_white } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} text-white`}>Personal journals for every team member.</li>
                        </div>

                        <div class="flex flex-row pb-2">
                            <img src={ checkmark_white } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} text-white`}>Instant drive times, and flagged overdrives.</li>
                        </div>
                    </ul>
                </div>
                
                
                <div className='pt-[32px] lg:pt-0 col-span-1'> {/* Image Box */}
                    <img src={ notes } alt="Notes UI" />
                </div>
            </div>

            <div className={`${styles.twoColBox}`}> {/* Feature 2 */}

                <div className='pt-[32px] lg:pt-0'> {/* Image Box */}
                    <img src={ hotels } alt="Hotels UI" />
                </div>

                <div className={`text-white order-first lg:order-last lg:ml-[80px]`}> {/* Text Box */}
                    <h6 className={`${styles.tag}`}>Fast tour creation</h6>
                    <h3 className={`${styles.h3}`}>Tab through your routing, we’ll check the drives.</h3>
                    <p class={`${styles.body} text-white`}>Build your entire tour routing without using the mouse, and let us calculate your distances between cities.</p>
                    <ul>
                        <div class="flex flex-row pb-2">
                            <img src={ checkmark_white } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} text-white`}>Google maps integration.</li>
                        </div>
                        <div class="flex flex-row pb-2">
                            <img src={ checkmark_white } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} text-white`}>Up to date venue name changes.</li>
                        </div>

                        <div class="flex flex-row pb-2">
                            <img src={ checkmark_white } alt="Checkmark" class={`${styles.checkmark}`}/>
                            <li class={`${styles.body} text-white`}>Instant drive times, and flagged overdrives.</li>
                        </div>
                    </ul>
                </div>
                
                
            </div>

            <div className='bg-blue h-[640px] w-[640px] absolute top-[1000px] left-[320px] rounded-full blur-[320px] z-0 opacity-30'></div>

        </div>

    </section>
  )
}

export default Personalized