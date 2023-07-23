import React from 'react'
import styles from "../styles";
import { checkmark, dragAndDropFlight, flightGrid } from "../assets";

const Flights = () => {
  return (
    <div className={`${styles.SectionBox} bg-gradient-to-t from-darkBlue to-blue py-[160px] `}>
        
        <div className={`${styles.contentBox} bg-white lg:px-[64px] lg:py-[64px] px-[8px] py-[64px] rounded-2xl`}> {/* Content Box */}

            <div className={`${styles.h2BoxFlat}`}>
                <div  class="bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Coming soon</h5></div>
                <h2 className={`${styles.h2} pb-[16px] text-center text-darkBlue pt-[16px]`}>Never enter a <span className="text-blue">flight</span> again, or build a grid.</h2>
            </div>
            
            <div className='grid gap-[32px] pt-[32px] grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr,2fr]'>

                <div className="pb-16">
                        <div className="h-[2px] w-full bg-gray"></div>
                        <h5 class={`${styles.tag} pt-[16px]`}>Step 1</h5>
                        <h5 class={`${styles.h5} text-darkBlue`}>Upload Tickets.</h5>
                        <p class={`${styles.body} text-darkBlue`}>View, sort and filter every flight across a tour, and export them as a spreadsheet.  Daysheets eliminates the risk involved in manually creating flight grids.</p>
                </div>

                <div className=' bg-blue border-[1px] border-gray rounded-xl'>
                    <img src={dragAndDropFlight} alt="Plane tickets being uploaded to Daysheets" className="h-full object-cover object-left-top" />
                </div>

                <div>
                    <div className="h-[2px] w-full bg-gray"></div>
                    <h5 class={`${styles.tag} pt-[16px]`}>Step 2</h5>
                    <h5 class={`${styles.h5} text-darkBlue`}>Build flight grids, & export with complete customization.</h5>
                    <p class={`${styles.body} text-darkBlue`}>View, sort and filter every flight across a tour, and export them as a spreadsheet.  Daysheets eliminates the risk involved in manually creating flight grids.</p>
                </div>

                <div className='relative overflow-hidden bg-lightWhite border-[1px] border-gray rounded-xl'>
                    <div className='absolute inset-1'>
                        <img src={flightGrid} alt="A Flight grid in Daysheets" className="h-[700px] -mb-12 mt-[40px] object-cover object-left-top"/>
                    </div>
                </div>

            </div>

        </div>
    
    
    </div>
  )
}

export default Flights